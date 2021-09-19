import { IStaticImageProps } from "gatsby-plugin-image/dist/src/components/static-image.server"

export interface ICursor {
  x: number
  y: number
  status: boolean
}

export interface IImage extends Omit<IStaticImageProps, "src"> {}

export interface IBackground {
  transparency: string
  alt: string
}
