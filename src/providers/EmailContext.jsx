import { createContext } from "react";
import axios from "axios";

export const EmailContext = createContext({});

export const EmailProvider = ({ children }) => {
  const emailContent = async (req, res) => {
    if (req.method === "POST") {
      try {
        const { sessionId } = req.body;

        const response = await axios.post(
          "https://dropmail.me/api/graphql/k7XnVuO1YB",
          {
            query: `
                    query {
                      session(id: "${sessionId}") {
                        mails {
                          fromAddr
                          text
                          headerSubject
                        }
                      }
                    }
                  `,
          }
        );

        if (response.data?.data?.session) {
          const email = response.data.data.session.mails;
          res.status(200).json({ email });
        }
      } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "An error occurred." });
      }
    } else {
      res.status(405).json({ error: "Method not allowed." });
    }
  };

  const emailGenerate = async (req, res) => {
    if (req.method === "POST") {
      try {
        const response = await axios.post(
          "https://dropmail.me/api/graphql/k7XnVuO1YB",
          {
            query: `
              mutation {
                introduceSession {
                  id,
                  expiresAt,
                  addresses {
                    address
                  }
                }
              }
            `,
          }
        );

        const sessionId = response.data.data.introduceSession.id;
        const { addresses, expiresAt } = response.data.data.introduceSession;
        const newEmail = addresses[0].address;
        const expirationTime = new Date(expiresAt).getTime();

        res.status(200).json({ sessionId, newEmail, expirationTime });
      } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "An error occurred." });
      }
    } else {
      res.status(405).json({ error: "Method not allowed." });
    }
  };

  return (
    <EmailContext.Provider value={{ emailContent, emailGenerate }}>
      {children}
    </EmailContext.Provider>
  );
};
