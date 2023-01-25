require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Cinnecta`,
    description: `Tome melhores decisões a partir do poder dos dados, com insights relevantes sobre hábitos e comportamentos do seu cliente.`,
    author: `Cinnecta`,
    copyright: `© Copyright - All Rights Reserved`,
    siteUrl: `https://site.cinnecta.com/`,
    socialMedia: {
      linkedin: "https://www.linkedin.com/company/cinnecta/mycompany/",
      youtube: "https://www.youtube.com/channel/UCEtN62PVpx146_bcn_dGsEQ",
      facebook: "https://www.facebook.com/cinnecta",
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        // name: `pages`,
        path: `${__dirname}/src/pages/conteudos/`,
      },
    },
    {
      resolve: `@tmttn/gatsby-plugin-linkedin-insight`,
      options: {
        partnerId: 834466,
        includeInDevelopment: false,
      },
    },
    // {
    //   resolve: "gatsby-plugin-hubspot",
    //   options: {
    //     trackingCode: 8759286,
    //     respectDNT: false,
    //     productionOnly: false,
    //   },
    // },
    {
      resolve: "gatsby-source-graphcms",
      options: {
        endpoint:
          "https://api-sa-east-1.hygraph.com/v2/cl4oa6qce1e4n01xr5ft43rur/master",
        token: process.env.GRAPHCMS_TOKEN,
        stages: ["PUBLISHED"],
        typePrefix: "Cms",
        fragmentsPath: "graphcms-path",
        queryConcurrency: 1,
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        includeInDevelopment: true,
        id: 2604046,
        sv: 6,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/icons/favicon.png",
      },
    },

    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-137274752-1", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT-NVM5CFV",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          head: false,
          respectDNT: true,
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
  ],
};
