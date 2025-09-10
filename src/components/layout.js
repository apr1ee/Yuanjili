// src/components/layout.js
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <div style={{ margin: '0', padding: '0' }}>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout