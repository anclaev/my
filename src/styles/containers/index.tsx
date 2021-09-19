import styled from "styled-components"

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

  position: fixed;
  overflow: visible;
  color: var(--color-bg);

  @media (max-width: 992px) {
    left: 1.25rem;
    top: 1.667rem;
    right: 1.25rem;
  }
`
