import styled, { css } from "styled-components"

import { IBackground } from "../../types/components"

export const Cursor = styled.div`
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

export const Logo = styled.span`
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

export const Background = styled.div<Pick<IBackground, "transparency">>`
  position: fixed;
  overflow: hidden;
  z-index: -7;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  &,
  & * {
    user-select: none;
  }

  & > *,
  &:after {
    position: absolute;
    top: 0;
    left: 0;
  }

  & * {
    width: 100%;
    height: 100%;
  }

  &:after {
    content: "";
    background: #000;
    opacity: ${(props) => props.transparency};
    bottom: 0;
    right: 0;
  }

  @media (min-aspect-ratio: 16/9) {
    & video,
    & img {
      height: 300%;
      top: -100%;
    }
  }

  @media (max-aspect-ratio: 16/9) {
    & video,
    & img {
      width: 300%;
      left: -100%;
    }
  }

  @supports (object-fit: cover) {
    & video,
    & img {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`

export const Social = styled.div<{ custom: boolean }>`
  position: ${({ custom }) => (custom ? "relative" : "fixed")};

  display: ${({ custom }) => (custom ? "none" : "flex")};
  flex-direction: ${({ custom }) =>
    custom ? "row-reverse" : "column-reverse"};
  
  ${({ custom }) =>
    !custom &&
    `
  left: calc(3.333rem - 18px);
  bottom: calc(2.917rem - 25px);
  `}}

  mix-blend-mode: difference; 
  z-index: 7;

  & * {
    user-select: none;
  }

  @media (max-width: 992px) {
    display: ${({ custom }) => (custom ? "flex" : "none")};
    
    & > a {
      padding: 10px 30px;
    }
  }
`

export const SocialLink = styled.a`
  padding: 35px 30px;
  overflow: visible;
  position: relative;

  &:hover {
    & img {
      width: 25px;
      height: 25px;
      opacity: 0.7;
    }
  }

  & > img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.2s;
    width: 18px;
    height: 18px;
    mix-blend-mode: difference;
  }
`

export const MenuWrapper = styled.button`
  position: absolute;
  overflow: visible;
  padding: 20px;
  right: -20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 7;
`

export const MenuIcon = styled.div<{ status: boolean }>`
  position: relative;
  overflow: visible;
  & > span {
    display: block;
    width: 50px;
    height: 0.5px;
    background: #fff;
    transition: 0.2s;
    ${(props) =>
      props.status
        ? css`
            &:first-child {
              transform: rotate(45deg) translateX(1px);
            }
            &:last-child {
              transform: rotate(-45deg) translateX(1px);
            }
          `
        : ""}
    &:nth-child(2) {
      margin: ${(props) => (props.status ? "0" : "7px 0")};
      ${(props) =>
        props.status
          ? css`
              opacity: 0;
            `
          : ""}
    }
  }
`

export const Lang = styled.button`
  position: absolute;
  right: 3em;
  top: 50%;
  transform: translateY(-50%);

  width: 30px;
  height: 30px;
  padding: 35px;

  cursor: pointer;
  user-select: none;
  color: var(--color-bg);
  mix-blend-mode: difference;

  font-size: 24px;
  text-transform: uppercase;
  text-align: center;

  opacity: 1;
  transition: 0.3s;
  z-index: 7;

  & > span[data-lang] {
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
    opacity: 1;
  }

  & > span {
    position: absolute;
    transition: 0.4s;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0;
  }

  & > span:first-child {
    left: -40px;
  }

  & > span:last-child {
    left: 40px;
  }

  &:after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    content: "";
    width: 0;
    height: 0;
    opacity: 0;
    transition: 0.3s;
  }

  &:hover {
    opacity: 1;

    &:after {
      width: 40px;
      height: 40px;
      opacity: 1;
    }
  }

  @media screen and (max-width: 576px) {
    font-size: 18px;
  }
`
