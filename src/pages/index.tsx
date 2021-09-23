import React, { useEffect } from "react"
import { useIntl } from "gatsby-plugin-react-intl"
import { useInView } from "react-intersection-observer"
import { graphql, useStaticQuery } from "gatsby"
import { useSectionScroll } from "../funcs"

import Layout from "../containers/Layout"
import Intersection from "../containers/Intersection"

import { AnclaevImage, Hello, Me, Edu, Cases, Call } from "../styles/pages/Home"

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
      <Intersection>
        <Me id="me">
          <span className="hi">Привет</span>
          <div className="about">
            <p>
              Я занимаюсь веб-разработкой на протяжении 2&nbsp;лет и нахожусь в
              пути от&nbsp;
              <span className="w">верстальщика лэндингов</span> до&nbsp;
              <span className="w">fullstack-разработчика</span>.
              <span className="a">
                — Артём Самарин, <span className="w">фрилансер</span>.
              </span>
            </p>
          </div>
          <div className="progress">
            <span>Изучение Gatsby и Nest JS...</span>
            <div>
              <span className="val">70%</span>
              <div className="status" style={{ width: "70%" }} />
            </div>
          </div>
          <AnclaevImage
            alt="Artem Samarin"
            image={img.childImageSharp.gatsbyImageData}
            className="ava"
          />
        </Me>
      </Intersection>
      <Edu id="edu"></Edu>
      <Cases id="cases"></Cases>
      <Call id="call"></Call>
    </Layout>
  )
}

export default IndexPage
