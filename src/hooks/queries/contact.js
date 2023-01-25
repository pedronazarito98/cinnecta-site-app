import { gql } from "graphql-request";

export const getContact = gql`
  query contactPage {
    contactPage(where: { slug: "contato" }) {
      descriptionContact {
        id
        titleDescription
        bodyDescription
        titleListSolutions
        listSolution {
          id
          listItem
        }
        imageContact {
          url
        }
      }
      depositionContact {
        id
        officeAgent
        nameAgent
        nameCompany
        bodyDeposition
        imageAgent {
          url
        }
        logoCompany {
          url
        }
      }
      ourAddress {
        ourAddress
      }
    }
  }
`;
