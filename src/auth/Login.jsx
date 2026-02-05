import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../services/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    setErro("");

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        senha
      );

      const uid = userCredential.user.uid;

      // Busca o perfil do usuário no Firestore
      const userDoc = await getDoc(doc(db, "usuarios", uid));

      if (!userDoc.exists()) {
        setErro("Usuário sem perfil definido.");
        return;
      }

      const perfil = userDoc.data().perfil;

      // Redireciona conforme perfil
      if (perfil === "Administrador") {
        navigate("/home");
      } else {
        navigate("/home");
      }
    } catch (err) {
      console.error(err);
      setErro("Email ou senha inválidos.");
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f5f5f5",
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          background: "#fff",
          padding: 32,
          borderRadius: 8,
          width: 320,
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: 20 }}>
          MCDP Corumbá
        </h2>

        {erro && (
          <p style={{ color: "red", marginBottom: 10 }}>{erro}</p>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            width: "100%",
            padding: 10,
            marginBottom: 10,
          }}
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
          style={{
            width: "100%",
            padding: 10,
            marginBottom: 20,
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: 10,
            background: "#ff7a00",
            color: "#fff",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
