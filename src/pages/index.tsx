import React from "react"
import { useIntl } from "gatsby-plugin-intl"

import Layout from "../containers/Layout"

import { Sub, Title } from "../styles/pages/Home"

const IndexPage: React.FC = () => {
  const intl = useIntl()
  return (
    <Layout>
      <Title>{intl.formatMessage({ id: "home_title" })}</Title>
      <Sub>{intl.formatMessage({ id: "home_subtitle" })}</Sub>
    </Layout>
  )
}

export default IndexPage
