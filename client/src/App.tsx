import { Routes, Route } from "react-router";
import Authentication from "./pages/Authentication/Authentication";
import Dashboard from "./pages/Dashboard/Dashboard";
import { RequireAuth } from "react-auth-kit";

function App(): JSX.Element {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth loginPath="/auth">
            <Dashboard />
          </RequireAuth>
        }
      />
      <Route path="/auth" element={<Authentication />} />
    </Routes>
  );
}

export default App;
