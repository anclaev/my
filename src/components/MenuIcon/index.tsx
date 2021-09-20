import React from 'react'

import { MenuIcon as Styled, MenuWrapper} from "../../styles/components"
import { IMenuProps } from "../../types/components"

const MenuIcon: React.FC<IMenuProps> = ({ status, setStatus }) => {
  const changeMenuStatus = () => setStatus(!status)

  return (
    <MenuWrapper className="cursor" onClick = {changeMenuStatus}>
      <Styled className="cursor" status={status}>
        <span className="cursor"></span>
        <span className="cursor"></span>
        <span className="cursor"></span>
      </Styled>
    </MenuWrapper>
  )
}

export default MenuIcon