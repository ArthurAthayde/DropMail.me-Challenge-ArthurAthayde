import React from "react";
import "./style.css";
import { emailDatabase } from "../../database";

export const Inbox = () => {
  return (
    <div className="container">
      <section className="inbox_container">
        <h2>Inbox</h2>
        <ul className="email_preview_container">
          {emailDatabase.email.map((data) => (
            <li key={data.id}>
              <h3>{data.headerSubject}</h3>
              <p>{data.fromAddr}</p>
              <p>{data.text.substring(0, 35) + "..."}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="email_container">
        {emailDatabase
          ? emailDatabase.email.map((data) => (
              <div key={data.id}>
                <h2>{data.headerSubject}</h2>
                <div>
                  <p>{data.text}</p>
                </div>
              </div>
            ))
          : "Your inbox is empty"}
      </section>
    </div>
  );
};
