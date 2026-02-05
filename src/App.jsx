import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import PrivateRoute from "./auth/PrivateRoute";
import { PERMISSIONS } from "./config/permissions";

// Páginas
import Home from "./pages/Home";
import Calendario from "./pages/Calendario";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={
            <PrivateRoute allowedRoles={PERMISSIONS.PUBLIC}>
              <Home />
            </PrivateRoute>
          }
        />

        <Route
          path="/calendario"
          element={
            <PrivateRoute allowedRoles={PERMISSIONS.PUBLIC}>
              <Calendario />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
}
