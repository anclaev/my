import React, { useRef, useState } from "react"
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

  const [scroll, setScroll] = useState<number>(0)

  const cursorMoveHandler = (e: any) => {
    let isActive = false
    try {
      isActive = e.target.className.includes("cursor")
    } catch (e) {
      isActive = true
    }
    setCursor({ x: e.clientX, y: e.clientY, status: isActive })
  }

  const wheelHandler = (e: WheelEvent) => {
    e.stopPropagation()

    let newY = refEl.current.scrollTop

    // console.log("new Y: ", newY)
    // console.log("scroll: ", scroll)
    console.log("e: ", e)

    // if (newY > scroll) {
    //   refEl.current.scrollTo(0, scroll + window.innerHeight)
    // } else {
    //   refEl.current.scrollTo(0, scroll - window.innerHeight)
    // }

    // setScroll(newY)
  }

  return (
    <>
      <StyledDoc />
      <Styled
        onMouseMove={cursorMoveHandler}
        // onWheel={wheelHandler}
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
