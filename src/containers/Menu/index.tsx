import React from 'react'

import { Menu as Styled } from "../../styles/containers"

import { IMenu } from "../../types/components"

// import Social from "../Social"

// import data from "../../config/content.json"

const Menu: React.FC<IMenu> = ({ status }) => (
  <Styled status={status} className="menu">
    <div>
      <div>Контент</div>
    </div>
  </Styled>
)

export default Menu