import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <ul className="flex justify-between text-3xl font-serif">
        <li className="text-white font m-5  p-2 border-4 border-black hover:bg-teal-900">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="text-white m-5 border-4 p-2 border-black hover:bg-teal-900">
          <Link to={"admin"}>Admin</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default App;
