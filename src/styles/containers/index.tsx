import styled from "styled-components"

import { IMenu } from "../../types/components"

export const Layout = styled.div`
  position: relative;
  height: 100%;
`

export const Header = styled.header`
  display: flex;
  mix-blend-mode: difference;
  height: 18px;

  left: 3.333rem;
  top: 2.917rem;
  right: 3.333rem;
  z-index: 7;

  position: fixed;
  overflow: visible;
  color: var(--color-bg);

  @media (max-width: 992px) {
    left: 1.25rem;
    top: 1.667rem;
    right: 1.25rem;
  }
`

export const Menu = styled.div<IMenu>`
  position: fixed;
  z-index: 6;
  display: flex;
  flex-direction: row;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: ${(props) => (props.status ? "100%" : 0)};
  transition: 0.7s;
  background: #fff;
  color: #000;
`