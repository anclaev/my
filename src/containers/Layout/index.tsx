import React, { useEffect, useRef, useState } from "react"
import { useIntl } from "gatsby-plugin-intl"
import { Helmet } from "react-helmet"

import StyledDoc from "../../styles"
import { Layout as Styled } from "../../styles/containers"

import Background from "../../components/Background"
import Cursor from "../../components/Cursor"

import { ICursor } from "../../types/components"

import Overlay from "../Overlay"

const Layout: React.FC = ({ children }) => {
  const intl = useIntl()
  const refEl = useRef<HTMLDivElement>(null)

  const [cursor, setCursor] = useState<ICursor>({
    x: 0,
    y: 0,
    status: false,
  })

  const cursorMoveHandler = (e: any) => {
    let isActive = false
    try {
      isActive = e.target.className.includes("cursor")
    } catch (e) {
      isActive = true
    }
    setCursor({ x: e.clientX, y: e.clientY, status: isActive })
  }
 
  return (
    <>
      <StyledDoc />
      <Styled
        onMouseMove={cursorMoveHandler}
        ref={refEl}
      >
        <Helmet htmlAttributes={{ lang: intl.locale }}>
          <title>{intl.formatMessage({ id: "site_title" })}</title>
          <meta
            name="description"
            content={intl.formatMessage({ id: "site_description" })}
          />
        </Helmet>
        <Overlay />
        {children}
        <Cursor {...cursor} />
        <Background
          alt={intl.formatMessage({ id: "home_background_alt" })}
          transparency="0.1"
        />
      </Styled>
    </>
  )
}

export default Layout
