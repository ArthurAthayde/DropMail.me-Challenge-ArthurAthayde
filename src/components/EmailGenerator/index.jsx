import React, { useEffect } from "react";
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
      <section className="flex items-center justify-center py-5 w-screen h-32">
        <div className="flex flex-col gap-2 w-full max-w-md">
          <span>Your temporary email address</span>
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => copyEmail()}
          >
            <input
              type="text"
              disabled
              defaultValue={emailDatabase.toAddr}
              className="max-w-[450px] w-3/4 p-2"
            />
            <img
              src={copyIcon}
              alt="copy icon"
              className="h-6 w-6 bg-center"
              style={{ height: "20px" }}
            />
            <button className="btn btn-primary">Copy</button>
          </div>
          <div className="flex gap-1 items-end self-center">
            <span>Autorefresh in</span>
            <Countdown />
          </div>
        </div>
      </section>
    </>
  );
};
