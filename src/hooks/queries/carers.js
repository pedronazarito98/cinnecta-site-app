import { gql } from "graphql-request";

export const getCarers = gql`
  query carersPage {
    careersPage(where: { slug: "carreiras" }) {
      bannerCareers {
        titleBanner
        subTitleBanner
        imageBanner {
          url
        }
      }
      depositionCollaborators {
        nameAgent
        officeAgent
        bodyDeposition
        imageAgent {
          url
          fileName
        }
      }
      imageCareers {
        url
      }
      stampsCareers {
        rankStamps
        descriptionStamp
        imageStamp {
          url
        }
      }
      noVacancy
      benefitsCinnecta {
        titleValues
        descriptionValues
      }
      benefitsContCinnecta {
        titleValues
        descriptionValues
      }
      openVacancies {
        area
        jobTitle
        descriptionJob
      }
      locationCinnecta {
        titleLocation
        descriptionLocation
        imageLocation {
          url
        }
      }
    }
  }
`;
