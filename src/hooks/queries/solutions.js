import { gql } from "graphql-request";

export const getSolutions = gql`
  query solutionsPage {
    solutionsPage(where: { slug: "solutions" }) {
      bannerSolution {
        id
        titleBanner
        subTitleBanner
        bodyBanner {
          html
        }
        imageBanner {
          url
          fileName
        }
      }
      infoCard {
        titleInfo
        id
        bodyInfo
      }
      depositionsCard {
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
      productCinnecta {
        id
        nameProduct
        bodyProduct {
          html
        }
        descriptionProduct
        labelButton
        imageProduct {
          url
        }
      }
      technologiesCard {
        id
        titleInfo
        bodyInfo
      }
      lgpdSolutions {
        id
        nameProduct
        descriptionProduct
        imageProduct {
          url
        }
      }
      exclusiveFeature {
        title
        description
      }
    }
  }
`;
