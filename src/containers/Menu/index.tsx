import React from 'react'

import { Menu as Styled, MenuContainer, MenuItems } from "../../styles/containers"

import Social from '../../components/Social'
import { IMenu } from "../../types/components"

const Menu: React.FC<IMenu> = ({ status }) => (
  <Styled status={status}>
    <MenuContainer>
      <div className="col-l">
        <MenuItems>
        <a className="cursor" data-current={true}>Начало</a>
        <a className="cursor">Кто я</a>
        <a className="cursor">Навыки</a>
        <a className="cursor">Проекты</a>
        </MenuItems>
      </div>
      <div className="col-r">
        <Social custom />
      </div>
    </MenuContainer>
  </Styled>
)

export default Menu