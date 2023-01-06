/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

require("dotenv").config();

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Proyectos Beta`,
    description: `Y el todo en nuestra vida es un Proyecto. Siempre podemos mejorar porque estamos en fase Beta..`,
    author: `Proyectos Beta TEAM`,
    siteUrl: `https://proyectosbeta.net/`,
    social: {
      twitter: `proyectosbeta`,
    },
    socialLinks: [
      {
        name: "facebook",
        url: "https://www.facebook.com/proyectosbeta1",
      },
      {
        name: "twitter",
        url: "https://twitter.com/proyectosbeta",
      },
      {
        name: "youtube",
        url: "https://www.youtube.com/proyectosbeta",
      },
      {
        name: "telegram",
        url: "https://telegram.me/proyectosbeta",
      },
      {
        name: "instagram",
        url: "https://www.instagram.com/proyectosbeta1/",
      },
      {
        name: "github",
        url: "https://github.com/proyectosbeta",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          process.env.GOOGLE_ANALYTICS_ID, // Google Analytics
        ],
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: true,
          respectDNT: true,
        },
      },
    },
  ],
};
