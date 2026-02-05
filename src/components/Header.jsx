import { getUsuarioLogado } from "../services/firebase";

export default function Header() {
  const usuario = getUsuarioLogado();

  return (
    <header
      style={{
        height: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        borderBottom: "1px solid #ddd",
      }}
    >
      <strong>MCDP Corumbá</strong>

      <div style={{ fontSize: 14 }}>
        {usuario.nome} ({usuario.perfil})
      </div>
    </header>
  );
}
