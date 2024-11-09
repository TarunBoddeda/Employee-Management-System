import React from "react";

const AcceptTask = () => {
  return (
    <div className="flex-shrink-0 w-[320px] h-fit p-3 rounded-lg bg-red-400">
      <div className="flex justify-between items-center">
        <button className="bg-red-600 hover:bg-red-800 px-3 py-1 rounded-md">
          High
        </button>
        <p>
          05<sup>th</sup>Feb 2002
        </p>
      </div>
      <div className="mt-3">
        <h4 className="text-2xl font-semibold">Learn React!</h4>
        <p id="task-list" className="mt-2 h-[100px] mb-3 overflow-y-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
          dolorem esse adipisci officia ex laborum quo vero doloribus inventore
          sunt.
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
