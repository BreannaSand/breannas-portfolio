import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PageTemplate = ({ data }) => {
  const page = data.contentfulPage
  const image = getImage(page.image)

  return (
    <Layout>
      <main style={{ padding: 96 }}>
        <h1>{page.title}</h1>
        <p>{page.body.body}</p>
        {image && <GatsbyImage image={image} alt={page.title} />}
      </main>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      body {
        body
      }
      image {
        gatsbyImageData(width: 600, placeholder: BLURRED)
      }
    }
  }
`


export default PageTemplate
