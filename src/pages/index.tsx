import React from "react"
import { useIntl } from "gatsby-plugin-intl"

import Layout from "../containers/Layout"

import { Hello } from "../styles/pages/Home"
import { Me } from "../styles/pages/Home"
import { Skills } from "../styles/pages/Home"
import { Cases } from "../styles/pages/Home"
import { Call } from "../styles/pages/Home"

const IndexPage: React.FC = () => {
  const intl = useIntl()
  return (
    <Layout>
      <Hello>
        <h1>{intl.formatMessage({ id: "home_title" })}</h1>
        <h2>{intl.formatMessage({ id: "home_subtitle" })}</h2>
      </Hello>
      <Me></Me>
      <Skills></Skills>
      <Cases></Cases>
      <Call></Call>
    </Layout>
  )
}

export default IndexPage
