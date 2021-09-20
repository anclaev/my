import styled from "styled-components"

import Social from "../../components/Social"

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
  align-items: center;

  top: 0;
  left: 0;
  
  width: 100%;
  height: ${(props) => (props.status ? "100%" : 0)};
  
  transition: 0.7s;
  background: #fff;
  color: #000;
`

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  height: auto;
  width: 100%;
  max-width: 100%;

  padding: 7.083rem 12.5%;

  &, & * {
    overflow: hidden;
  }

  & > div {
    display: flex;
    flex: 1 1;
    flex-direction: column;
  }

  & > div:first-child {
    align-items: center; 
    justify-content: center;
  }

  @media(max-width: 992px) {
    flex-direction: column;
    height: 100%;
    padding: 1.667rem 1.25rem;

    & > div {
      width: 100%;
    }

    & > div:last-child {
      flex: 0 0 auto;
      flex-direction: row;
      justify-content: left;
    }
  }

  @media (max-width: 320px) {
    & > div:last-child {
      justify-content: center;
    }
  }
`

export const MenuItems = styled.div`
  display: flex;
  flex-direction: column;

  line-height: 1.3;

  font-transform: uppercase;
  font-size: 3.75em;

  & > a {
    position: relative;
    align-self: flex-start;
    cursor: pointer;
    user-select: none;
    margin-bottom: .3em;

    &:after {
      content: "";
      position: absolute;
      display: block;

      bottom: 0;
      left: 0;

      width: 0;
      height: 4px;
      background: black;
    
      transition: .7s;
    }
    
    &:hover:after {
      width: 100%;
    }
  }

  & > a[data-current="true"]:after {
    width: 100%;
  }

  @media (max-width: 992px) {
    font-size: 2rem;
    width: 100%;
  }
`