import React from "react";

const AllTask = () => {
  return (
    <>
      <div
        id="taskList"
        className="bg-zinc-900 mt-5 h-[130px] overflow-auto rounded-md p-3"
      >
        <div className="bg-red-400 flex rounded cursor-pointer px-4 py-2 mb-2 justify-between">
          <h2>Tarun</h2>
          <h2>Make a UI Design</h2>
          <h2>Status</h2>
        </div>
        <div className="bg-green-400 flex rounded cursor-pointer px-4 py-2 mb-2 justify-between">
          <h2>Tarun</h2>
          <h2>Make a UI Design</h2>
          <h2>Status</h2>
        </div>
        <div className="bg-blue-400 flex rounded cursor-pointer px-4 py-2 mb-2 justify-between">
          <h2>Tarun</h2>
          <h2>Make a UI Design</h2>
          <h2>Status</h2>
        </div>
        <div className="bg-yellow-400 flex rounded cursor-pointer px-4 py-2 mb-2 justify-between">
          <h2>Tarun</h2>
          <h2>Make a UI Design</h2>
          <h2>Status</h2>
        </div>
        <div className="bg-purple-400 flex rounded cursor-pointer px-4 py-2 mb-2 justify-between">
          <h2>Tarun</h2>
          <h2>Make a UI Design</h2>
          <h2>Status</h2>
        </div>
      </div>
    </>
  );
};

export default AllTask;
