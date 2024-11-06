import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">
          Hello, <br /> Tarun👋
        </h1>

        <button className="bg-red-600 hover:bg-red-800 text-white rounded-md px-4 py-2 text-[18px]">
          Log Out
        </button>
      </div>
    </>
  );
};

export default Header;
