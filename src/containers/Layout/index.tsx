import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import { Helmet } from "react-helmet"

import StyledDoc from "../../styles"
import StyledLayout from "../../styles/Layout"

const Layout: React.FC = ({ children }) => {
  const intl = useIntl()

  return (
    <>
      <StyledDoc />
      <StyledLayout className="container">
        <Helmet htmlAttributes={{ lang: intl.locale }}>
          <title>{intl.formatMessage({ id: "site_title" })}</title>
          <meta
            name="description"
            content={intl.formatMessage({ id: "site_description" })}
          />
        </Helmet>

        {children}
      </StyledLayout>
    </>
  )
}

export default Layout
