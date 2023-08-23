import React, { useState, useEffect } from "react";
import logotipo from "../../assets/logotipo.png";
import "./style.css";

export const Navbar = () => {
  return (
    <>
      <header className="navHeader">
        <img src={logotipo} alt="Logotipo" className="logotipo" />
        <button className="notifyBtn">Enable notifications!</button>
      </header>
    </>
  );
};
