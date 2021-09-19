module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "anclaev",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/icon.png",
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
        name: "assets",
        path: "./src/assets/",
      },
      __key: "assets",
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
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`ru`, `en`],
        defaultLanguage: `ru`,
        redirect: true,
      },
    },
  ],
}
