import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  return (
    <>
      <div
        id="taskList"
        className="overflow-x-auto overflow-y-hidden mt-[50px] flex gap-5"
      >
        <AcceptTask />
        <NewTask />
        <CompleteTask />
        <FailedTask />
      </div>
    </>
  );
};

export default TaskList;
