import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import PrivateRoute from "./auth/PrivateRoute";

import { PERMISSIONS } from "./config/permissions";

// Páginas públicas
import Home from "./pages/Home";
import Calendario from "./pages/Calendario";
import Biblia from "./pages/Biblia";
import Avisos from "./pages/Avisos";
import Agenda from "./pages/Agenda";
import Devocional from "./pages/Devocional";
import PedidosOracao from "./pages/PedidosOracao";
import Transmissoes from "./pages/Transmissoes";
import Ministerios from "./pages/Ministerios";
import IgrejaCaseira from "./pages/IgrejaCaseira";
import Galeria from "./pages/Galeria";

// Páginas administrativas
import Membros from "./pages/Membros";
import Financeiro from "./pages/Financeiro";
import CategoriasFinanceiras from "./pages/CategoriasFinanceiras";
import Documentos from "./pages/Documentos";
import Patrimonio from "./pages/Patrimonio";
import Relatorios from "./pages/Relatorios";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* Públicas */}
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

          <Route
            path="/biblia"
            element={
              <PrivateRoute allowedRoles={PERMISSIONS.PUBLIC}>
                <Biblia />
              </PrivateRoute>
            }
          />

          <Route
            path="/avisos"
            element={
              <PrivateRoute allowedRoles={PERMISSIONS.PUBLIC}>
                <Avisos />
              </PrivateRoute>
            }
          />

          <Route
            path="/agenda"
            element={
              <PrivateRoute allowedRoles={PERMISSIONS.PUBLIC}>
                <Agenda />
              </PrivateRoute>
            }
          />

          <Route
            path="/devocional"
            element={
              <PrivateRoute allowedRoles={PERMISSIONS.PUBLIC}>
                <Devocional />
              </PrivateRoute>
            }
          />

          <Route
            path="/oracao"
            element={
              <PrivateRoute allowedRoles={PERMISSIONS.PUBLIC}>
                <PedidosOracao />
              </PrivateRoute>
            }
          />

          <Route
            path="/transmissoes"
            element={
              <PrivateRoute allowedRoles={PERMISSIONS.PUBLIC}>
                <Transmissoes />
              </PrivateRoute>
            }
          />

          <Route
            path="/ministerios"
            element={
              <PrivateRoute allowedRoles={PERMISSIONS.PUBLIC}>
                <Ministerios />
              </PrivateRoute>
            }
          />

          <Route
            path="/igreja-caseira"
            element={
              <PrivateRoute allowedRoles={PERMISSIONS.PUBLIC}>
                <IgrejaCaseira />
              </PrivateRoute>
            }
          />

          <Route
            path="/galeria"
            element={
              <PrivateRoute allowedRoles={PERMISSIONS.PUBLIC}>
                <Galeria />
              </PrivateRoute>
            }
          />

          {/* Administrativas */}
          <Route
            path="/membros"
            element={
              <PrivateRoute allowedRoles={PERMISSIONS.MEMBROS}>
                <Membros />
              </PrivateRoute>
            }
          />

          <Route
            path="/financeiro"
            element={
              <PrivateRoute allowedRoles={PERMISSIONS.FINANCEIRO}>
                <Financeiro />
              </PrivateRoute>
            }
          />

          <Route
            path="/categorias-financeiras"
            element={
              <PrivateRoute allowedRoles={PERMISSIONS.CATEGORIAS_FINANCEIRAS}>
                <CategoriasFinanceiras />
              </PrivateRoute>
            }
          />

          <Route
            path="/documentos"
            element={
              <PrivateRoute allowedRoles={PERMISSIONS.DOCUMENTOS}>
                <Documentos />
              </PrivateRoute>
            }
          />

          <Route
            path="/patrimonio"
            element={
              <PrivateRoute allowedRoles={PERMISSIONS.PATRIMONIO}>
                <Patrimonio />
              </PrivateRoute>
            }
          />

          <Route
            path="/relatorios"
            element={
              <PrivateRoute allowedRoles={PERMISSIONS.RELATORIOS}>
                <Relatorios />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
