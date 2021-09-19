import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Image from "../Image"

import { Background as Styled } from "../../styles/components"

import { IBackground } from "../../types/components"

const Background: React.FC<IBackground> = (props) => {
  const { img } = useStaticQuery(graphql`
    query BackgroundImageQuery {
      img: file(relativePath: { regex: "/rainy.jpg/" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)

  return (
    <Styled {...props}>
      <Image alt={props.alt} image={img.childImageSharp.gatsbyImageData} />
    </Styled>
  )
}

export default Background
