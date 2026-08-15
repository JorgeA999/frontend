import { useState } from "react";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash
} from "react-icons/fa";

import Input from "../../components/Input/Input";
import logo from "../../assets/images/logo.png";

import "./Login.css";

function Login() {

  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [recordarme, setRecordarme] = useState(false);

  const iniciarSesion = (e) => {

    e.preventDefault();

    if (!correo.trim()) {
      alert("Ingrese el correo electrónico.");
      return;
    }

    if (!password.trim()) {
      alert("Ingrese la contraseña.");
      return;
    }

    console.log({
      correo,
      password,
      recordarme
    });

    // Aquí conectaremos con la API PHP
  };

  return (

    <div className="login-container">

      <div className="login-card">

        <div className="logo">

          <img
            src={logo}
            alt="Cafetería La Sultana"
          />

        </div>

        <h2>Cafetería La Sultana</h2>

        <p>
          Sistema Web de Gestión Empresarial
        </p>

        <form onSubmit={iniciarSesion}>

          <Input
            icon={<FaEnvelope />}
            type="email"
            placeholder="Correo electrónico"
            value={correo}
            onChange={(e)=>setCorreo(e.target.value)}
          />

          <div className="password-container">

            <Input
              icon={<FaLock />}
              type={mostrarPassword ? "text" : "password"}
              placeholder="Contraseña"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />

            <button
              type="button"
              className="btn-eye"
              onClick={()=>setMostrarPassword(!mostrarPassword)}
            >

              {
                mostrarPassword
                ? <FaEyeSlash/>
                : <FaEye/>
              }

            </button>

          </div>

          <div className="opciones">

            <label>

              <input
                type="checkbox"
                checked={recordarme}
                onChange={(e)=>setRecordarme(e.target.checked)}
              />

              Recordarme

            </label>

            <a href="#">
              ¿Olvidó su contraseña?
            </a>

          </div>

          <button
            type="submit"
            className="btn-login"
          >

            Iniciar sesión

          </button>

        </form>

      </div>

    </div>

  );

}

export default Login;
