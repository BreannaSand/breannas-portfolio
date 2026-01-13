import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

const PortfolioPage = ({ data }) => {
    const items = data.allContentfulPortfolioItem.nodes

    return (
        <Layout>
            <main style={{ padding: 96 }}>
                <h1>Portfolio</h1>

                <ul className="portfolio-list">
                    {items.map(item => (
                        <li key={item.slug}>
                            <Link to={`/portfolio/${item.slug}`}>
                                <h2>{item.title}</h2>
                            </Link>
                            {item.description && <p>{item.description.description}</p>}
                        </li>
                    ))}
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
      }
    }
  }
`

export default PortfolioPage
