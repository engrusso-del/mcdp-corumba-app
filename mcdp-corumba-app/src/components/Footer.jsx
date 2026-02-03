export default function Footer() {
  return (
    <footer
      style={{
        marginTop: 40,
        paddingTop: 10,
        borderTop: "1px solid #ddd",
        fontSize: 12,
        textAlign: "center",
        color: "#666",
      }}
    >
      © {new Date().getFullYear()} Ministério Casa do Pai – Corumbá
    </footer>
  );
}
