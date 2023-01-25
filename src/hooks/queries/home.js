import { gql } from "graphql-request";

export const getHomepage = gql`
  query homepage {
    homepage(where: { slug: "home" }) {
      banner {
        titleBanner
        subTitleBanner
        imageBanner {
          url
          fileName
        }
      }
      infoCard {
        titleInfo
        bodyInfo
        imageInfo {
          url
        }
      }
      depositionsCard {
        nameAgent
        nameCompany
        officeAgent
        bodyDeposition
        logoCompany {
          fileName
          url
        }
        imageAgent {
          url
          fileName
        }
      }
      imageStamp {
        url
      }
      stapmsCinnecta {
        id
        descriptionStamp
        positionStamp
      }
      productsCinnecta {
        id
        nameProduct
        descriptionProduct
        bodyProduct {
          html
        }
        labelButton
        redirectButton
        reverseCard
        imageProduct {
          url
        }
      }
    }
  }
`;
