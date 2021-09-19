import styled from "styled-components"

export const Layout = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 7.083rem 12.5%;
`

export const Header = styled.header`
  position: absolute;
  left: 3.333rem;
  top: 2.917rem;
  right: 3.333rem;
  height: 18px;
  overflow: visible;
  display: flex;

  @media (max-width: 992px) {
    left: 1.25rem;
    top: 1.667rem;
    right: 1.25rem;
  }
`