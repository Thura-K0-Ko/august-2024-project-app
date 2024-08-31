import React, { useEffect, useState } from "react";
import TaskList from "./TaskList";
import SkeltonLoader from "./SkeltonLoader";

const TaskListGroup = ({ tasks, taskLoading,removeTask,doneTask,checking }) => {
  return (
    <div className=" overflow-y-scroll hideScrollBar  rounded-3xl">
      {taskLoading && <SkeltonLoader />}
      {tasks.map((task) => (
        <TaskList key={task.id} task={task} removeTask={removeTask} doneTask={doneTask}  />
      ))}
      
 
    </div>
  );
};

export default TaskListGroup;
