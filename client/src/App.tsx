import { Routes, Route, Navigate } from "react-router-dom";
import { RequireAuth, useAuthUser } from "react-auth-kit";
import Dashboard from "./pages/Dashboard/Dashboard";
import Authentication from "./pages/Authentication/Authentication";
import "./assets/styles/base.scss";

function App(): JSX.Element {
  const auth = useAuthUser();
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
      <Route
        path="/auth"
        element={auth !== null ? <Navigate to="/" /> : <Authentication />}
      />
    </Routes>
  );
}

export default App;
