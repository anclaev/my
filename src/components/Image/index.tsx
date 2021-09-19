import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"

import { IImage } from "../../types/components"

const Image: React.FC<IImage> = () => {
  const { image } = useStaticQuery(graphql`
    query MyQuery {
      image: file(relativePath: { eq: "rainy.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return <Img fluid={image.childImageSharp.fluid} />
}

export default Image
