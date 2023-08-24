import React, { useState, useEffect, useContext } from "react";
import "./style.css";
import { useQuery, gql, useMutation } from "@apollo/client";
import { EXAMPLE, NEW_SESSION } from "../../Apollo/querys";
import { emailDatabase } from "../../database";

export const EmailGenerator = () => {
  const [loadEmail, { data, loading, error }] = useMutation(NEW_SESSION);

  useEffect(() => {
    loadEmail();
  }, []);

  return (
    <>
      <section className="generator_container">
        <div className="generator_controler">
          <span>Your temporary email address</span>
          <div>
            <input type="text" disabled defaultValue={""} />
            <button>Copy</button>
          </div>
          <div className="refresh_container">
            <span>Autorefresh in</span>
            <button onClick={() => handleGenerateEmail()}>Refresh</button>
          </div>
        </div>
      </section>
    </>
  );
};
