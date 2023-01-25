import { gql } from "graphql-request";

export const getAbout = gql`
  query aboutPage {
    aboutPage(where: { slug: "sobre" }) {
      bannerAbout {
        id
        titleBanner
        subTitleBanner
      }
      cardCinnecta {
        linkId
        numberId
        descriptionId
      }
      timelineContent {
        dateTimeline
        descriptionTimeline
        directionTimeline
        illustrationTimeline {
          url
          fileName
        }
      }
      depositionCompanies {
        titleDeposition
        bodyDeposition {
          html
        }
        imageCompanie {
          url
          fileName
        }
      }
      valuesCinnecta {
        titleValues
        descriptionValues
        iconValues {
          url
        }
      }
      cultureCinnecta {
        titleCulture
        descriptionCulture
        iconCulture {
          url
        }
      }
      newsAbout {
        id
        linkArticle
        imageNews {
          url
        }
      }
      imageCulture {
        url
        fileName
      }
    }
  }
`;
