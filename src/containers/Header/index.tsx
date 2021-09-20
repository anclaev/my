import React from "react"

import { Header as Styled } from "../../styles/containers"
import { Logo } from "../../styles/components"

import Menu from "../../components/MenuIcon"
import { IMenuProps } from "../../types/components"

const Header: React.FC<IMenuProps> = (props) => {
  return (
    <Styled>
      <Logo className="cursor">anclaev</Logo>
      <Menu {...props} />
    </Styled>
  )
}

export default Header
