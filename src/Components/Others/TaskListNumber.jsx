import React from "react";

const TaskListNumber = ({ data }) => {
  return (
    <>
      <div className="mt-9 flex gap-5 flex-wrap">
        <div className="w-[300px] h-[120px] rounded-lg flex flex-col p-7 justify-center bg-blue-400">
          <h3 className="text-3xl font-bold">{data.taskCounts.newTask}</h3>
          <h4 className="text-2xl font-semibold">New Task</h4>
        </div>
        <div className="w-[300px] h-[120px] rounded-lg flex flex-col p-7 justify-center bg-green-400">
          <h3 className="text-3xl font-bold">{data.taskCounts.completed}</h3>
          <h4 className="text-2xl font-semibold">Completed Task</h4>
        </div>
        <div className="w-[300px] h-[120px] rounded-lg flex flex-col p-7 justify-center bg-yellow-400">
          <h3 className="text-3xl font-bold">{data.taskCounts.active}</h3>
          <h4 className="text-2xl font-semibold">Accepted Task</h4>
        </div>
        <div className="w-[300px] h-[120px] rounded-lg flex flex-col p-7 justify-center bg-red-400">
          <h3 className="text-3xl font-bold">{data.taskCounts.failed}</h3>
          <h4 className="text-2xl font-semibold">Failed Task</h4>
        </div>
      </div>
    </>
  );
};

export default TaskListNumber;
