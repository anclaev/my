import React from "react"

import Image from "../Image"

import { Background as Styled } from "../../styles/components"

import { IBackground } from "../../types/components"

const Background: React.FC<IBackground> = (props) => (
  <Styled {...props}>
    <Image alt={props.alt} />
  </Styled>
)

export default Background
