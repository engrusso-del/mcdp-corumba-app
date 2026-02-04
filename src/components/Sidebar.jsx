import { NavLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import menuConfig from "../config/menuConfig";

export default function Sidebar() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <aside style={{ width: 220, padding: 16, borderRight: "1px solid #ddd" }}>
      <h3>Menu</h3>

      <nav style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {menuConfig
          .filter((item) => item.roles.includes(user.role))
          .map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              style={({ isActive }) => ({
                textDecoration: "none",
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              {item.icon} {item.label}
            </NavLink>
          ))}
      </nav>
    </aside>
  );
}

