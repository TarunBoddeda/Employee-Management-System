import React from "react";
import Header from "../Others/Header";
import TaskListNumber from "../Others/TaskListNumber";
import TaskList from "../Task/TaskList";

const EmployeeDashboard = ({ data }) => {
  return (
    <>
      <div className="p-10">
        <Header data={data} />
        <TaskListNumber data={data} />
        <TaskList data={data} />
      </div>
    </>
  );
};

export default EmployeeDashboard;
