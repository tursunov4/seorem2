import React from "react";
import "./Assets/main.css";
import Access from "./Pages/Access/Access";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Suppliers from "./Pages/Suppliers/Suppliers";
import Sidebar from "./components/Sidebar/Sidebar";
import Clients from "./Pages/Clients/Clients";
function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Access/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          <Route path="/mainpage" element={ <Sidebar /> }>
            <Route index element={<Suppliers />} />
            <Route path="/mainpage/clients"  element={<Clients />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
