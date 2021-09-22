import React from "react"
import { Link } from "gatsby"

import { Header as Styled } from "../../styles/containers"
import { Logo } from "../../styles/components"

import Menu from "../../components/MenuIcon"
import Lang from "../../components/Lang"

import { IMenuProps } from "../../types/components"

const Header: React.FC<IMenuProps> = (props) => {
  return (
    <Styled>
      <Link to="/">
        <Logo className="cursor">anclaev</Logo>
      </Link>
      <Lang />
      <Menu {...props} />
    </Styled>
  )
}

export default Header
