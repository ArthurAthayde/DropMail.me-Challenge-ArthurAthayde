import React, { useState, useEffect } from "react";
import "./style.css";

export const Inbox = () => {
  return (
    <div className="container">
      <section className="inbox_container">
        <h2>Inbox</h2>
        <ul>
          <li></li>
        </ul>
      </section>
      <section className="email_container">
        <h2>Email title</h2>
        <div>
          <p>Email content</p>
        </div>
      </section>
    </div>
  );
};
