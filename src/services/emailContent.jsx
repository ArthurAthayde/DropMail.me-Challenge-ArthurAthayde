import axios from "axios";

export const emailContent = async (req, res) => {
  if (req.method === "POST") {
    try {
      const { sessionId } = req.body;

      const response = await axios.post(
        "https://dropmail.me/api/graphql/dropauthexample",
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
        const emails = response.data.data.session.mails;
        res.status(200).json({ emails });
      }
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "An error occurred." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed." });
  }
};
