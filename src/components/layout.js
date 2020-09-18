/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "../css/bootstrap.min.css"
import "../css/font-awesome.min.css"
import "../css/style.css"
import "../css/responsive.css"

const Layout = ({ children, location = {} }) => {
  useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)


  const pathnameLocation = location.pathname || '';
  const useWhiteNav = pathnameLocation === "/contact-form/"
    || pathnameLocation === "/contact/"
    || pathnameLocation === "/404/" 
    || pathnameLocation === "/careers/"
    || pathnameLocation.match("\/work\/.+")
    || pathnameLocation === "/services/";

  const withoutFooter = pathnameLocation === "/contact-form/"
    || pathnameLocation === "/404/" 
    || pathnameLocation === "/contact/"
    || pathnameLocation.match("\/work\/.+");

  const beyondCareers = pathnameLocation.match("\/careers\/.+");
  return (
    <>
      <div className="tmrrwinc-site">
        <Header whiteNav={useWhiteNav} changeHeaderButton={beyondCareers} />
        {children}

        {!withoutFooter && <Footer />}


        {/* {(typeof window !== "undefined" &&
          window.location.pathname === "/contact-form/") ||
        (typeof window !== "undefined" &&
          window.location.pathname === "/contact/") ||
        (typeof window !== "undefined" &&
          window.location.pathname.includes("/work/")) ||
        (typeof window !== "undefined" &&
          window.location.pathname === "/services/" ) ? (
          <Header whiteNav />
        ) : (
          <Header />
        )}
        {children}
        {(typeof window !== "undefined" &&
          window.location.pathname === "/contact-form/") ||
        (typeof window !== "undefined" &&
          window.location.pathname.includes("/work/")) ? (
          ""
        ) : (
          <Footer />
        )} */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
