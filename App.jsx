import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateInventory from "./CreateInventory";
import DashboardInventory from "./DashboardInventory";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CreateInventory />} />
      <Route path="/dashboard" element={<DashboardInventory />} />
    </Routes>
  );
}

export default App;
