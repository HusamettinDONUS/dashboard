import React from "react";
import styles from "./login.module.scss";
import logo from "../../assets/Images/logolar_gursoy-02.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (email === "test@test.com" && password === "test") {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/anasayfa");
    } else {
      alert("Invalid email or password");
    }
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <h1 className={styles.welcomeMessage}>Hoş Geldiniz</h1>
      <p className={styles.greeting}>Devam etmek için giriş yapın</p>
      <form className={styles.loginForm} onSubmit={handleLogin}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Mail</label>
          <input type="email" id="email" placeholder="test@test.com" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Şifre</label>
          <input type="password" id="password" placeholder="test" required />
        </div>
        <button type="submit" className={styles.loginButton}>
          Giriş
        </button>
      </form>
    </div>
  );
};

export default Login;
