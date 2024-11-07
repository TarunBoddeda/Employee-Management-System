import React from "react";
import Header from "../Others/Header";
import CreateTask from "../Others/CreateTask";
import AllTask from "../Others/AllTask";

const AdminDashboard = () => {
  return (
    <>
      <div id="admin" className="p-[22px]">
        <Header />
        <CreateTask />
        <AllTask />
      </div>
    </>
  );
};

export default AdminDashboard;
