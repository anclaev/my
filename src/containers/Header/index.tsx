import React from "react"
import { StyledLogo } from "../../styles/components"
import { StyledHeader } from "../../styles/containers"

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StyledLogo className="cursor">anclaev</StyledLogo>
    </StyledHeader>
  )
}

export default Header
