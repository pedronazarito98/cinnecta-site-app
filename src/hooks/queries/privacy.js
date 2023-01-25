import { gql } from "graphql-request";

export const getPrivacy = gql`
  query privacyPage {
    privacyPage(where: { slug: "privacidade" }) {
      id
      privacyText {
        html
      }
    }
  }
`;
