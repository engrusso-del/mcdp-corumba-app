import { Link } from "react-router-dom";

export default function CardMenu({ title, icon, onClick }) {
  return (
    <div style={styles.card} onClick={onClick}>
      {icon && <span>{icon}</span>}
      <span>{title}</span>
    </div>
  );
}

const styles = {
  card: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: 12,
    borderRadius: 8,
    cursor: "pointer",
    backgroundColor: "#f5f5f5",
  },
};
