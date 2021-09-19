import React from "react"

import { Logo } from "../../styles/components"
import { Header as Styled } from "../../styles/containers"

const Header: React.FC = () => {
  return (
    <Styled>
      <Logo className="cursor">anclaev</Logo>
    </Styled>
  )
}

export default Header
