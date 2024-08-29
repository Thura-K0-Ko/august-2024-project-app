import React from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskListGroup from "./components/TaskListGroup";
import Container from "./components/Container";

const App = () => {
  return (
    <div className=" flex flex-col min-h-screen gap-5 justify-center items-center bg-zinc-500">
      <Container>
        <div className=" shadow-2xl p-10 bg-slate-300 rounded-lg  overflow-y-scroll hideScrollBar ">
          <Header />
          <TaskForm />
          <TaskListGroup />
        </div>
      </Container>
    </div>
  );
};

export default App;
