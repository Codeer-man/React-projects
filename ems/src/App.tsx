import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/DashBoard/EmployeeDashboard";
import AdminDashboard from "./components/DashBoard/AdminDashboard";

import {  useContext, useEffect, useState } from "react";
import { setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

export default function App() {
  const [user, SetUser] = useState<string | null>(null);

  const handleLogin = (email: string, password: string) => {
    if(email === "admin@example.com" && password === "123"){
      SetUser("admin")
    } else if(email === 'user@menubar.com' && password === "123"){
      SetUser("employee")
    } else {
      alert("Invalid Credentials")
    }
  };
  const data = useContext(AuthContext);

  useEffect(() => {
    setLocalStorage();
  }, []);
  return (
    <>
        {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard/>}
    </>
  );
}
