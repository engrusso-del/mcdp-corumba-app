import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../services/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function PrivateRoute({ children, allowedRoles }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [perfil, setPerfil] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        setUser(null);
        setLoading(false);
        return;
      }

      setUser(currentUser);

      const userDoc = await getDoc(doc(db, "usuarios", currentUser.uid));
      if (userDoc.exists()) {
        setPerfil(userDoc.data().perfil);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <p style={{ padding: 20 }}>Carregando...</p>;
  }

  // Não logado
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Sem permissão
  if (allowedRoles && !allowedRoles.includes(perfil)) {
    return <Navigate to="/home" replace />;
  }

  return children;
}
