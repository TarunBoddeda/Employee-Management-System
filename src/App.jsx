import React, { useContext, useEffect, useState } from "react";
import Login from "./Components/Auth/Login";
import EmployeeDashboard from "./Components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./Utils/LocalStorage";
import { AuthContext } from "./Context/AuthProvider";
const App = () => {
  const [user, setUser] = useState(null);

  const authData = useContext(AuthContext);

  useEffect(() => {
    if (authData) {
      const loggedInUser = localStorage.getItem("Logged In User");
      if (loggedInUser) {
        setUser(loggedInUser.role);
      }
    }
  }, [authData]);

  const handleLogin = (email, password) => {
    if (
      authData &&
      authData.admin.find((e) => e.email == email && e.password == password)
    ) {
      setUser("admin");
    } else if (
      authData &&
      authData.employees.find((e) => e.email == email && e.password == password)
    ) {
      setUser("employee");
    } else {
      alert("Invalid Credentials!");
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
