import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  console.log(data);
  return (
    <>
      <div
        id="taskList"
        className="overflow-x-auto overflow-y-hidden mt-[50px] flex gap-5"
      >
        {data.tasks.map((e, i) => {
          if (e.active) {
            return <AcceptTask key={i} data={e} />;
          }
          if (e.newTask) {
            return <NewTask key={i} data={e} />;
          }
          if (e.completed) {
            return <CompleteTask key={i} data={e} />;
          }
          if (e.failed) {
            return <FailedTask key={i} data={e} />;
          }
        })}
      </div>
    </>
  );
};

export default TaskList;
