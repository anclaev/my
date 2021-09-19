import React from "react"

import { Cursor as Styled } from "../../styles/components"
import { ICursor } from "../../types/components"

const Cursor: React.FC<ICursor> = (props) => (
  <Styled
    style={{
      transform: `translate(calc(${props.x}px - 50%), calc(${props.y}px - 50%))`,
    }}
    data-status={props.status}
  />
)

export default Cursor
