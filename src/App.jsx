import React, { useEffect, useState } from "react";
import Login from "./Components/Auth/Login";
import EmployeeDashboard from "./Components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./Utils/LocalStorage";

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if (email == "admin@email.com" && password == 123) {
      // console.log("Admin");
      setUser("admin");
      console.log(user);
    } else if (email == "user@email.com" && password == 123) {
      // console.log("Employee");
      setUser("employee");
      console.log("This is User");
    } else {
      alert(user);
    }
  };
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "employee" ? <EmployeeDashboard /> : <AdminDashboard />}
    </>
  );
};

export default App;
