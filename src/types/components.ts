import { GatsbyImageProps } from "gatsby-plugin-image"

export interface ICursor {
  x: number
  y: number
  status: boolean
}

export interface IImage extends GatsbyImageProps {}

export interface IBackground {
  transparency: string
  alt: string
}
