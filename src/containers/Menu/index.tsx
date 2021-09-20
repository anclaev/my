import React, { useState } from 'react'
import { navigate } from 'gatsby-link'

import { Menu as Styled, MenuContainer, MenuItems } from "../../styles/containers"

import Social from '../../components/Social'
import Lang from '../../components/Lang'

import { IMenuProps } from "../../types/components"

const Menu: React.FC<IMenuProps> = ({ status, setStatus }) => {
  const [section, setSection] = useState<string>('hello')

  const clickHandler = (e: any) => {
    const target = e.target.dataset.target
    
    e.preventDefault()
    setSection(target)
    setStatus(false)
    navigate(`#${target}`)
  }

  return (
    <Styled status={status}>
      <MenuContainer>
        <div className="col-l">
          <MenuItems>
            <a className={`cursor${section === 'hello' ? ' current' : ''}`} onClick={clickHandler} data-target="hello">Начало</a>
            <a className={`cursor${section === 'me' ? ' current' : ''}`} onClick={clickHandler} data-target="me">Кто я</a>
            <a className={`cursor${section === 'edu' ? ' current' : ''}`} onClick={clickHandler} data-target="edu">Навыки</a>
            <a className={`cursor${section === 'cases' ? ' current' : ''}`} onClick={clickHandler} data-target="cases">Проекты</a>
          </MenuItems>
        </div>
        <div className="col-r">
          <Social custom />
        </div>
      </MenuContainer>
      <Lang />
    </Styled>
  )
}

export default Menu