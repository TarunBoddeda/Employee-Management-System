import React from "react";

const AcceptTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 w-[320px] h-fit p-3 rounded-lg bg-yellow-400">
      <div className="flex justify-between items-center">
        <button className="bg-red-600 hover:bg-red-800 px-3 py-1 rounded-md">
          {data.category}
        </button>
        <p>{data.taskDate}</p>
      </div>
      <div className="mt-3">
        <h4 className="text-2xl font-semibold">{data.taskTitle}</h4>
        <p id="task-list" className="mt-2 h-[100px] mb-3 overflow-y-auto">
          {data.taskDescription}
        </p>
      </div>
      <div className="mt-2 flex gap-2">
        <button className="bg-green-500 hover:bg-green-600 px-3 py-1 rounded-md w-full text-white">
          Completed
        </button>
        <button className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-md w-full text-white">
          Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
