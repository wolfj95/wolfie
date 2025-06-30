module.exports = {
  siteMetadata: {
    title: "wolfie.dev",
    titleTemplate: '%s • hello from jacob',
    description: "I'm a PhD student and researcher studying how people learn about computing. Check out some of the things I'm working on!",
    url: 'https://wolfie.dev',
    image: '/src/images/favicon.png'
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `wolfie.dev`,
        short_name: `wolfie`,
        start_url: `/`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
