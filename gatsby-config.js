module.exports = {
  siteMetadata: {
    title: "wolfie",
  },
  plugins: [
    "gatsby-plugin-emotion", 
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      }
    },
  ],
};
