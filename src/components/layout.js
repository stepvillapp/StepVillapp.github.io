// import { Link, useStaticQuery, graphql } from "gatsby"
// import * as React from "react"
// import { container, heading, navLinks, navLinkItem, navLinkText, siteTitle } from './layout.module.css'
// // import GlobalStyle from "./style.js"


// const Layout = ({pageTitle, pageHeading, children}) => {

//     const data = useStaticQuery(graphql`
//     query {
//         site(siteMetadata: {}) {
//           siteMetadata {
//             title
//           }
//         }
//       }
//       `)

//     return (
//         <main className={container}>
//             <title>{pageTitle} | {data.site.siteMetadata.title}</title>
//             <p className={siteTitle}>{data.site.siteMetadata.title}</p>
//             <nav>
//                 <ul className={navLinks}>
//                     <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
//                     <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
//                     <li className={navLinkItem}><Link to="/contact" className={navLinkText}>Contact</Link></li>
//                     <li className={navLinkItem}><Link to="/blog" className={navLinkText}>Blog</Link></li>
            
//                 </ul>
//             </nav>
//             <h1 className={heading}>{pageHeading}</h1>
//             {children}

//         </main>
//     )
// }
// export default Layout

import React from "react"
import PropTypes from "prop-types"

import GlobalStyle from "./style.js"

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    {children}
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
