import { gql } from "@apollo/client";

export const NEW_SESSION = gql`
  mutation {
    introduceSession {
      id
      expiresAt
      addresses {
        address
      }
    }
  }
`;

// export const GET_EMAIL_CONTENT = gql`
//   query Email() {
//     session(id: $sessionid) {
//       expiresAt
//       mails {
//         rawSize
//         fromAddr
//         toAddr
//         downloadUrl
//         text
//         headerSubject
//       }
//     }
//   }
// `;

export const EXAMPLE = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;
