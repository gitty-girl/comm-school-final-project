import { useAuth } from "../../context/AuthContext";

function Button() {
  const { logout } = useAuth();

  return (
    <div>
      <button onClick={logout}>Log Out</button>
    </div>
  );
}

export default Button;
