/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path:
    process.env.NODE_ENV === "development"
      ? "./.env.development"
      : "./.env.production",
});

console.log("NODE_ENV:", process.env.NODE_ENV)
console.log("SPACE ID:", process.env.CONTENTFUL_SPACE_ID)
console.log("TOKEN EXISTS:", !!process.env.CONTENTFUL_ACCESS_TOKEN)


module.exports = {
  siteMetadata: {
    title: `Breannas Portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        environment: "master"
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
};
