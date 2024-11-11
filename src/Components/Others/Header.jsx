import React, { useEffect, useState } from "react";
const Header = ({ data }) => {
  // useEffect(() => {
  //   const [username, setUsername] = useState("");
  //   if (!data) {
  //     setUsername("Admin");
  //   } else {
  //     setUsername(data.firstName);
  //   }
  // }, []);
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">
          Hello, <br /> User!👋
        </h1>

        <button
          onClick={() => {
            localStorage.setItem("loggedInUser", "");
            window.location.reload();
          }}
          className="bg-red-600 hover:bg-red-800 text-white rounded-md px-4 py-2 text-[18px]"
        >
          Log Out
        </button>
      </div>
    </>
  );
};

export default Header;
