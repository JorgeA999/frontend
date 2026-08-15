import "./Login.css";
import { FaUser, FaLock } from "react-icons/fa";

function Login() {
  return (
    <div className="login-container">

      <div className="login-card">

        <div className="logo">
          ☕
        </div>

        <h2>Cafetería La Sultana</h2>

        <p>Sistema Web de Gestión</p>

        <form>

          <div className="input-group">
            <FaUser className="icon"/>
            <input
              type="email"
              placeholder="Correo electrónico"
            />
          </div>

          <div className="input-group">
            <FaLock className="icon"/>
            <input
              type="password"
              placeholder="Contraseña"
            />
          </div>

          <button>

            Iniciar sesión

          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;