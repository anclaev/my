import React, { useState } from "react"
import { useIntl } from "gatsby-plugin-intl"
import { Helmet } from "react-helmet"

import StyledDoc from "../../styles"
import { StyledLayout } from "../../styles/containers"

import Header from "../Header"

import Cursor from "../../components/Cursor"
import { ICursor } from "../../types/components"

const Layout: React.FC = ({ children }) => {
  const intl = useIntl()

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
      <StyledLayout onMouseMove={cursorMoveHandler}>
        <Helmet htmlAttributes={{ lang: intl.locale }}>
          <title>{intl.formatMessage({ id: "site_title" })}</title>
          <meta
            name="description"
            content={intl.formatMessage({ id: "site_description" })}
          />
        </Helmet>
        <Header />
        {children}
        <Cursor {...cursor} />
      </StyledLayout>
    </>
  )
}

export default Layout
