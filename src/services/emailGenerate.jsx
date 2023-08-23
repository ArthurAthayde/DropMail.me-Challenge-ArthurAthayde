import axios from "axios";

export const emailGenerate = async (req, res) => {
  if (req.method === "POST") {
    try {
      const response = await axios.post(
        "https://dropmail.me/api/graphql/dropauthexample",
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

      const sessionId = data.introduceSession.id;
      const { data } = response.data;
      const { addresses, expiresAt } = data.introduceSession;
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
