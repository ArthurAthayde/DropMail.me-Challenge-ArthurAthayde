import React, { useEffect } from "react";
import "./style.css";
import { useQuery, gql, useMutation } from "@apollo/client";
import { EXAMPLE, NEW_SESSION } from "../../Apollo/querys";
import { emailDatabase } from "../../database";
import { Countdown } from "../Countdown";
import copyIcon from "../../assets/copyIcon.svg";
import { LocalStorageHandle } from "../LocalStorageHandle";

export const EmailGenerator = () => {
  // const [loadEmail, { data, loading, error }] = useMutation(NEW_SESSION);

  LocalStorageHandle({ emailDatabase });

  const copyEmail = () => {
    if (emailDatabase.email) {
      navigator.clipboard.writeText(emailDatabase.toAddr).then(() => {
        console.log("Email address copied successfully");
      });
    }
  };

  return (
    <>
      <section className="generator_container">
        <div className="generator_controler">
          <span>Your temporary email address</span>
          <div className="input_controler" onClick={() => copyEmail()}>
            <input type="text" disabled defaultValue={emailDatabase.toAddr} />
            <img src={copyIcon} alt="copy icon" className="copyIcon" />
            <button>Copy</button>
          </div>
          <div className="refresh_container">
            <span>Autorefresh in</span>
            <Countdown />
          </div>
        </div>
      </section>
    </>
  );
};
