import styled from "styled-components"

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

export const Social = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column-reverse;

  left: calc(3.333rem - 18px);
  bottom: calc(2.917rem - 25px);

  mix-blend-mode: difference;
  z-index: 7;

  & * {
    user-select: none;
  }

  @media (max-width: 992px) {
    display: none;
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
