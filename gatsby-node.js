const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions


  const pageResult = await graphql(`
    {
      allContentfulPage {
        nodes {
          slug
        }
      }
    }
  `)

  if (pageResult.errors) {
    console.error(pageResult.errors)
    return
  }

  pageResult.data.allContentfulPage.nodes.forEach(node => {
    createPage({
      path: node.slug === "index" ? "/" : `/${node.slug}`,
      component: path.resolve("./src/templates/contentful-page-slug.js"),
      context: { slug: node.slug },
    })
  })


  const portfolioResult = await graphql(`
    {
      allContentfulPortfolioItem {
        nodes {
          slug
        }
      }
    }
  `)

  if (portfolioResult.errors) {
    console.error(portfolioResult.errors)
    return
  }

  portfolioResult.data.allContentfulPortfolioItem.nodes.forEach(node => {
    createPage({
      path: `/portfolio/${node.slug}`,

      component: path.resolve("./src/templates/portfolio-item.js"),
      context: { slug: node.slug },
    })
  })
}
