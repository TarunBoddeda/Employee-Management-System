import React from "react";
import Header from "../Others/Header";
import TaskListNumber from "../Others/TaskListNumber";
import TaskList from "../Task/TaskList";

const EmployeeDashboard = () => {
  return (
    <>
      <div className="p-10">
        <Header />
        <TaskListNumber />
        <TaskList />
      </div>
    </>
  );
};

export default EmployeeDashboard;
