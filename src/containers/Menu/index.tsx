import React, { useState } from "react"
import { navigate } from "gatsby-link"
import { useIntl } from "gatsby-plugin-react-intl"

import {
  Menu as Styled,
  MenuContainer,
  MenuItems,
} from "../../styles/containers"

import Social from "../../components/Social"

import { IMenuProps } from "../../types/components"

const Menu: React.FC<IMenuProps> = ({ status, setStatus }) => {
  const [section, setSection] = useState<string>("hello")
  const intl = useIntl()

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
            <a
              className={`cursor${section === "hello" ? " current" : ""}`}
              onClick={clickHandler}
              data-target="hello"
            >
              {intl.formatMessage({ id: "menu_item_home" })}
            </a>
            <a
              className={`cursor${section === "me" ? " current" : ""}`}
              onClick={clickHandler}
              data-target="me"
            >
              {intl.formatMessage({ id: "menu_item_me" })}
            </a>
            <a
              className={`cursor${section === "edu" ? " current" : ""}`}
              onClick={clickHandler}
              data-target="edu"
            >
              {intl.formatMessage({ id: "menu_item_edu" })}
            </a>
            <a
              className={`cursor${section === "cases" ? " current" : ""}`}
              onClick={clickHandler}
              data-target="cases"
            >
              {intl.formatMessage({ id: "menu_item_cases" })}
            </a>
          </MenuItems>
        </div>
        <div className="col-r">
          <Social custom />
        </div>
      </MenuContainer>
    </Styled>
  )
}

export default Menu
