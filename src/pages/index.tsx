import React, { useEffect } from "react"
import { useIntl } from "gatsby-plugin-react-intl"
import { graphql, useStaticQuery } from "gatsby"
import { useSectionScroll } from "../funcs"

import Layout from "../containers/Layout"

import { AnclaevImage, Hello } from "../styles/pages/Home"
import { Me } from "../styles/pages/Home"
import { Edu } from "../styles/pages/Home"
import { Cases } from "../styles/pages/Home"
import { Call } from "../styles/pages/Home"

const IndexPage: React.FC = () => {
  const intl = useIntl()
  const scroll = useSectionScroll()

  const { img } = useStaticQuery(graphql`
    query MyQuery {
      img: file(relativePath: { regex: "/me.png/" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)

  useEffect(() => {
    scroll.init()
    return () => {
      scroll.destroy()
    }
  }, [])

  return (
    <Layout>
      <Hello id="hello">
        <h1>{intl.formatMessage({ id: "home_title" })}</h1>
        <h2>{intl.formatMessage({ id: "home_subtitle" })}</h2>
      </Hello>
      <Me id="me">
        <AnclaevImage
          alt="Artem Samarin"
          image={img.childImageSharp.gatsbyImageData}
        />
      </Me>
      <Edu id="edu"></Edu>
      <Cases id="cases"></Cases>
      <Call id="call"></Call>
    </Layout>
  )
}

export default IndexPage
