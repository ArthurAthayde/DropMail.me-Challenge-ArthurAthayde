import { useEffect } from "react";

export const LocalStorageHandle = ({ emailDatabase }) => {
  useEffect(() => {
    localStorage.setItem("@dropMail_sessionId", emailDatabase.sessionID);
    localStorage.setItem("@dropMail_email", emailDatabase.toAddr);
    localStorage.setItem(
      "@dropMail_expirationDate",
      emailDatabase.expirationDate
    );

    const handleBeforeUnload = () => {
      localStorage.removeItem("@dropMail_sessionId");
      localStorage.removeItem("@dropMail_email");
      localStorage.removeItem("@dropMail_expirationDate");
    };

    const currentDate = new Date().getTime();
    const expirationDate = new Date(emailDatabase.expirationDate).getTime();

    if (expirationDate > currentDate) {
      localStorage.clear();
    } else {
      window.addEventListener("beforeunload", handleBeforeUnload);
    }

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [emailDatabase]);
};
