import React from "react";
import { Routes, Route } from "react-router";
import Login from "./pages/Login/Login";

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Login />} />
    </Routes>
  );
}

export default App;
