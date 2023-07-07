import React from "react";
import { Routes, Route } from "react-router";
import Authentication from "./pages/Authentication/Authentication";

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/auth" element={<Authentication />} />
    </Routes>
  );
}

export default App;
