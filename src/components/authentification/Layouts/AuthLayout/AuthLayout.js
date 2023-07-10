import Forgot from "../../Forgot/Forgot";
import Register from "../../authClient/Register/Register";
import RegisterProfessionnel from "../../authProfessionel/Register/Register";
import Login from "../../Login/Login";
import "./authlayout.css";
import { useState } from "react";

const AuthLayout = () => {
  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(false);
  const [registerP, setRegisterP] = useState(false);
  const [forgot, setForgot] = useState(false);

  const handleLogin = () => {
    setLogin(true);
    setRegister(false);
    setRegisterP(false);
    setForgot(false);
  };
  const handleRegisterClient = () => {
    setLogin(false);
    setRegister(true);
    setRegisterP(false);
    setForgot(false);
  };
  const handleRegisterProfessionnel = () => {
    setLogin(false);
    setRegisterP(true);
    setRegister(false);
    setForgot(false);
  };
  const handleForgot = () => {
    setLogin(false);
    setRegister(false);
    setRegisterP(false);
    setForgot(true);
  };

  return (
    <div className="authlayout">
      {/* logo */}
      <div className="authlayout_logo">
        <img src="./assets/img/Logo.png" alt="logo" />
      </div>
      {/* form */}
      {login && <Login />}
      {register && <Register />}
      {registerP && <RegisterProfessionnel />} 
      {forgot && <Forgot />}
      {/* actions */}
      <div className="authlayout_actions">
        <p
          className="authlayout_actions-l"
          onClick={login ? handleRegisterClient : handleLogin}
        >
          {login ? "Inscription client ?" : "Se connecter ?"}
          </p>
          <br/><br/>
          <p 
           className="authlayout_actions-l"
          onClick={login ? handleRegisterProfessionnel : handleLogin}>
          {login ? "Inscription professionnel ?" :""}
          </p>
        <p className="authlayout_actions-r" onClick={handleForgot}>
          Oublier ?
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;