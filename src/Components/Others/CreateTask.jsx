import React from "react";

const CreateTask = () => {
  return (
    <>
      <div className="flex sm:flex-wrap justify-between p-3 bg-zinc-900 w-full mt-4 rounded-md">
        <div>
          <div className="">
            <h3>Task Title</h3>
            <input
              className="bg-transparent outline-none border rounded-md px-2 w-[470px] py-1"
              type="text"
              placeholder="Make a UI design"
            />
          </div>

          <div className="mt-[18px]">
            <h3>Date</h3>
            <input
              className="mt-[2px] bg-transparent outline-none border rounded-md px-2 w-[470px] py-1"
              type="date"
            />
          </div>

          <div className="mt-[18px]">
            <h3>Assign To</h3>
            <input
              className="mt-[2px] bg-transparent outline-none border rounded-md px-2 w-[470px] py-1"
              type="text"
              placeholder="Employee Name"
            />
          </div>

          <div className="mt-[18px]">
            <h3>Category</h3>
            <input
              className="mt-[2px] bg-transparent outline-none border rounded-md px-2 w-[470px] py-1"
              type="text"
              placeholder="design, dev, etc..."
            />
          </div>
        </div>

        <div className="flex flex-col">
          <h3>Description</h3>
          <textarea
            className="bg-transparent border outline-none p-2"
            name=""
            id=""
            cols="70"
            rows="8"
          ></textarea>
          <button className="bg-emerald-500 hover:bg-emerald-800 text-lg rounded-md mt-4 mb-3 py-[8px]">
            Create Button
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateTask;
