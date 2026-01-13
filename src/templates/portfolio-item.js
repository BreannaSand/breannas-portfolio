import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PortfolioItemTemplate = ({ data }) => {
    const item = data.contentfulPortfolioItem
    const image = getImage(item.image)

    return (
        <Layout>
            <main style={{ padding: 96 }}>
                <h1>{item.title}</h1>
                {item.description && <p>{item.description.description}</p>}
                {image && <GatsbyImage image={image} alt={item.title} />}
            </main>
        </Layout>
    )
}

export const query = graphql`
  query ($slug: String!) {
    contentfulPortfolioItem(slug: { eq: $slug }) {
      title
      description {
            description
      }
      image {
        gatsbyImageData(width: 600, placeholder: BLURRED)
      }
    }
  }
`

export default PortfolioItemTemplate
