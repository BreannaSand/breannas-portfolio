import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PortfolioPage = ({ data }) => {
    const items = data.allContentfulPortfolioItem.nodes

    return (
        <Layout>
            <main style={{ padding: 96 }}>
                <h1>Portfolio</h1>

                <ul className="portfolio-list">
                    {items.map(item => {
                        const image = item.image && getImage(item.image)

                        return (
                            <li key={item.slug}>
                                <Link to={`/portfolio/${item.slug}`}>
                                    {image && (
                                        <GatsbyImage
                                            image={image}
                                            alt={item.image?.description || item.title}
                                        />
                                    )}
                                    <h2>{item.title}</h2>
                                </Link>

                                {item.description && (
                                    <p>{item.description.description}</p>
                                )}
                            </li>
                        )
                    })}
                </ul>
            </main>
        </Layout>
    )
}

export const query = graphql`
  {
    allContentfulPortfolioItem {
      nodes {
        slug
        title
        description {
          description
        }
        image {
          gatsbyImageData(
            width: 400
            placeholder: BLURRED
          )
          description
        }
      }
    }
  }
`

export default PortfolioPage
