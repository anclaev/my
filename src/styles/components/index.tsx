import styled from "styled-components"

export const StyledCursor = styled.div`
  position: fixed;
  top: 0;
  left 0;
  width: 5px;
  height: 5px;
  z-index: 100;
  mix-blend-mode: difference;
  border-radius: 100px;
  border: 1px solid hsla(0,0%,100%,.4);
  background: #fff;
  transition: width .3s, height .3s, background .3s;
  pointer-events: none;

  &[data-status=true] {
    width: 50px;
    height: 50px;
    background: transparent;
  }
`

export const StyledLogo = styled.span`
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 39px;

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  mix-blend-mode: difference;
`
