const path = require("path")

module.exports = {
  siteMetadata: {
    siteUrl: "https://anclaev.com/",
    title: "Anclaev",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/icon.png",
        icon_options: {
          purpose: `any maskable`,
        },
        name: `Anclaev`,
        short_name: `Anclaev`,
        description: `Frontend-разработчик`,
        lang: `ru`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#fff`,
        display: `standalone`,
        crossOrigin: `use-credentials`,
        localize: [
          {
            start_url: `/en/`,
            lang: `en`,
            name: `Anclaev`,
            short_name: `Anclaev`,
            description: `Frontend-developer`,
          },
        ],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: "./src/assets/fonts",
      },
      __key: "fonts",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: path.resolve(__dirname + "src/assets/svg"),
        },
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true,
      },
    },
    {
      resolve: `gatsby-plugin-react-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`ru`, `en`],
        defaultLanguage: `ru`,
        redirectDefaultLanguageToRoot: true,
        redirect: true,
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        diration: 1500,
      }
    }
  ],
}
