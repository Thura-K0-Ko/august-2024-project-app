import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskListGroup from "./components/TaskListGroup";
import Container from "./components/Container";
import EmptyTask from "./components/EmptyTask";
import toast, { Toaster } from "react-hot-toast";
import Status from "./components/Status";

const App = () => {
  const [tasks, setTask] = useState([]);

  const [taskLoading, setTaskLoading] = useState(false);
  const [sending, setSending] = useState(false);

  const fetchTask = async () => {
    setTaskLoading(true);
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    setTask(data);
    setTaskLoading(false);
  };
  useEffect(() => {
    fetchTask();
  }, []);

  const addTask = async (newTask) => {
    setSending(true);
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(newTask),
    });
    const data = await res.json();

    setTask([...tasks, data]);
    toast.success("DONE CREATE Task");
    setSending(false);
  };

  const removeTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();

    setTask(tasks.filter((el) => el.id != id));

    toast.success("DELETE Task");
  };

  const doneTask = async (id, currentTask) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isDone: !currentTask }),
    });
    const data = await res.json();
    setTask(tasks.map((el) => (el.id === id ? data : el)));

    console.log(data);
  };

  return (
    <div className=" flex flex-col min-h-screen gap-5 justify-center items-center myGradient">
      <Container>
          <Header />
        <div className=" h-[28rem] lg:h-[28rem] font-mono shadow-2xl rounded-2xl p-10 bg-slate-300  flex flex-col">
          <TaskForm addTask={addTask} sending={sending} />
          <Status  tasks={tasks} />

          {tasks.length ? (
            <TaskListGroup
              tasks={tasks}
              taskLoading={taskLoading}
              removeTask={removeTask}
              doneTask={doneTask}
            />
          ) : (
            <EmptyTask />
          )}
          <Toaster />
        </div>
      </Container>
    </div>
  );
};

export default App;
