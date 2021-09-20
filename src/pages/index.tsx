import React, { useEffect } from "react"
import { useIntl } from "gatsby-plugin-react-intl"
import { useSectionScroll } from "../funcs"

import Layout from "../containers/Layout"

import { Hello } from "../styles/pages/Home"
import { Me } from "../styles/pages/Home"
import { Skills } from "../styles/pages/Home"
import { Cases } from "../styles/pages/Home"
import { Call } from "../styles/pages/Home"

const IndexPage: React.FC = () => {
  const intl = useIntl()
  const scroll = useSectionScroll()

  useEffect(() => {
    scroll.init()
    return () => {
      scroll.destroy()
    }
  }, [])

  return (
    <Layout>
      <Hello id="1">
        <h1>{intl.formatMessage({ id: "home_title" })}</h1>
        <h2>{intl.formatMessage({ id: "home_subtitle" })}</h2>
      </Hello>
      <Me id="2"></Me>
      <Skills id="3"></Skills>
      <Cases id="4"></Cases>
      <Call id="5"></Call>
    </Layout>
  )
}

export default IndexPage
