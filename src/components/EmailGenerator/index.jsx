import React, { useState, useEffect } from "react";
import "./style.css";

export const EmailGenerator = () => {
  return (
    <>
      <section className="generator_container">
        <div className="generator_controler">
          <span>Your temporary email address</span>
          <div>
            <input type="text" name="" id="" />
            <button>Copy</button>
          </div>
          <div className="refresh_container">
            <span>Autorefresh in</span>
            <button>Refresh</button>
          </div>
        </div>
      </section>
    </>
  );
};
