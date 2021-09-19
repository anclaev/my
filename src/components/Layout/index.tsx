import React from "react"
import { PageProps } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"
import { Helmet } from "react-helmet"

const Layout: React.FC = ({ children }) => {
  const intl = useIntl()

  return (
    <>
      <Helmet>
        <title>{intl.formatMessage({ id: "site_title" })}</title>
        <meta
          name="description"
          content={intl.formatMessage({ id: "site_description" })}
        />
      </Helmet>

      {children}
    </>
  )
}

export default Layout
