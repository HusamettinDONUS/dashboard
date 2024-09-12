import React, { useEffect } from "react";
import styles from "./header.module.scss";
import { LuLayoutDashboard } from "react-icons/lu";
import { TiArrowBackOutline } from "react-icons/ti";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleDashboard = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/anasayfa");
  };


  return (
    <header className={styles.header}>
      <div className={styles.button} onClick={() => navigate(-1)}>
        <TiArrowBackOutline />
        <span>Geri</span>
      </div>

      {/* <h3>
        {location.pathname === "/meeting-notes" ? "" : location.pathname.slice(1).charAt(0).toUpperCase() + location.pathname.slice(2)}
      </h3> */}

      <div className={styles.button} onClick={handleDashboard}>
        <span>Ana Sayfa</span>
        <LuLayoutDashboard />
      </div>
    </header>
  );
};

export default Header;
