import React, { useState } from "react"

import Header from "../Header"
import Menu from "../Menu"
import Social from "../../components/Social"

const Overlay: React.FC = () => {
  const [menu, setMenu] = useState<boolean>(false)

  return (
    <>
      <Header status={menu} setStatus={setMenu} />
      <Menu status={menu} setStatus={setMenu} />
      <Social />
    </>
  )
}

export default Overlay
