module.exports = {
  siteMetadata: {
    title: `个人网站`,
    description: `个人网站作品集`,
    author: `@yuanji li`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `我的作品集`,
        short_name: `作品集`,
        start_url: `/`,
        background_color: `#0a192f`,
        theme_color: `#64ffda`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // 使用现有的图标
      },
    },
  ],
}