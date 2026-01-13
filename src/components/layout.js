import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulMenuItem(sort: { order: ASC }) {
        nodes {
          label
          page {
            slug
          }
        }
      }
    }
  `)

  return (
    <>
      <nav>
        <ul>
          {data.allContentfulMenuItem.nodes.map((item) => (
            <li key={item.label}>
              <Link
                to={item.page.slug === "index" ? "/" : `/${item.page.slug}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <main>{children}</main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Breanna's Portfolio</p>
      </footer>

    </>
  )
}

export default Layout
