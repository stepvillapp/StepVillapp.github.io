/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: `/stepvillapp`,
  siteMetadata: {
    title: `Irene Bosque`,
    siteUrl: `https://www.yourdomain.tld`
  },

  plugins: [
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },

    

  "gatsby-plugin-image", 
  "gatsby-plugin-sharp",

]
};



