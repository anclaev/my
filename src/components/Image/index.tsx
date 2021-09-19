import React from "react"

import { GatsbyImage } from "gatsby-plugin-image"

import { IImage } from "../../types/components"

const Image: React.FC<IImage> = (props) => <GatsbyImage {...props} />

export default Image
