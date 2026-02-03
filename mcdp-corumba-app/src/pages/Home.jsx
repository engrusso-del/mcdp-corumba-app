import CardMenu from "../components/CardMenu";

export default function Home() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Ministério Casa do Pai</h1>
      <p>Bem-vindo ao app da igreja MCDP Corumbá</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: 16,
          marginTop: 24,
        }}
      >
        <CardMenu icon="📅" title="Calendário" to="/calendario" />
        <CardMenu icon="📖" title="Bíblia" to="/biblia" />
        <CardMenu icon="📢" title="Avisos" to="/avisos" />
        <CardMenu icon="🗓️" title="Agenda" to="/agenda" />
        <CardMenu icon="🙏" title="Pedidos de Oração" to="/oracao" />
        <CardMenu icon="📺" title="Transmissões" to="/transmissoes" />
      </div>
    </div>
  );
}
