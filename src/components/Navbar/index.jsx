import React, { useState, useEffect } from "react";
import logotipo from "../../assets/logotipo.png";
import "./style.css";

export const Navbar = () => {
  const [notificationPermission, setNotificationPermission] = useState(
    window.Notification.permission
  );

  const allowNotify = () => {
    if (notificationPermission !== "granted") {
      window.Notification.requestPermission((res) => {
        if (res === "granted") {
          setNotificationPermission("granted");
        }
      });
    }
  };

  useEffect(() => {
    setNotificationPermission(window.Notification.permission);
  }, []);

  return (
    <>
      <header className="navHeader">
        <img src={logotipo} alt="Logotipo" className="logotipo" />
        <button onClick={allowNotify} className="notifyBtn">
          {notificationPermission !== "granted"
            ? "Enable notifications!"
            : "Notifications allowed"}
        </button>
      </header>
    </>
  );
};
