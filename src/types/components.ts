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

export interface IMenu {
  status: boolean
}

export interface IMenuProps extends IMenu {
  setStatus?: (status: boolean) => void
}

export interface IHelmetProps {
  lang: string,
  title: string,
  description: string,
  url?: string,
  username?: string,
  img?: {
    twitter: string,
    og: string
  },
  og?: {
    locale: string;
    alt: string;
    type: string;
  }
}