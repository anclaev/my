import styled from "styled-components"

import Image from "../../../components/Image"

// Секция 'Hello'

export const Hello = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-top: 7.083rem;
  padding-bottom: 7.083rem;

  color: var(--color-bg);

  & > h1,
  & > h2 {
    display: block;
    overflow: hidden;
  }

  & > h1 {
    margin-bottom: 1.167rem;
    max-width: 70%;
    white-space: pre-line;

    text-transform: uppercase;
    font-size: 3.75rem;
    line-height: 1.111111111111111;
    letter-spacing: 0.03rem;

    @media (max-width: 992px) {
      font-size: 1.25rem;
      margin-bottom: 0.667rem;
      max-width: 100%;
      line-height: 1.176470588235294;
    }
  }

  & > h2 {
    font-family: "Roboto Condensed";
    font-weight: 400;
    margin-bottom: 1.5rem;
    font-size: 1rem;
    line-height: 1.416666666666667;

    @media (max-width: 992px) {
      font-size: 0.667rem;
      margin-bottom: 0.667rem;
    }
  }
`

// Секция 'Me'

export const Me = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 3rem;

  position: relative;
  padding-top: 6rem;
  padding-bottom: 3rem;

  &,
  & > * {
    overflow-y: hidden;
    z-index: 1;
  }

  background: var(--color-primary);

  & > span.hi {
    display: block;
    font-size: 1em;

    &:after {
      display: block;
      content: "";
      width: 50%;
      height: 3px;
      max-width: 300px;
      margin-top: 2%;
      background: var(--color-bg);
    }
  }

  & > div.about {
    font-size: 0.85em;
    line-height: 130%;
    padding: 0.5em 0;

    & p {
      display: inline-block;
      width: auto;
      max-width: 70%;
    }

    & span.w {
      color: var(--color-bg);
    }

    & span.a {
      display: block;
      width: auto;
      font-size: 0.75em;
      text-align: right;
      margin-top: 5%;
    }
  }

  & > div.progress {
    font-size: 0.5em;
    max-width: 70%;

    & > div {
      position: relative;
      width: 100%;
      height: calc(3rem + 4px);
      margin-top: 20px;

      & > span.val {
        position: absolute;
        right: 5px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 3rem;
      }

      & > div.status {
        background: var(--color-bg);
        height: inherit;
      }
    }
  }

  @media (max-width: 992px) {
    font-size: 2rem;
    padding-top: 5rem;
    padding-bottom: 1.5rem;

    & > div.about > p {
      max-width: 80%;
    }

    & > div.progress {
      margin-top: 10px;

      & > div {
        height: calc(1rem + 4px);

        & > span.val {
          font-size: 1rem;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;

    & > div.about {
      flex-grow: 1;
      padding: 1em 0;
    }
  }

  @media screen and (max-width: 576px) {
    & > div.about > p {
      max-width: none;
    }
  }
`

// Секция 'Edu'

export const Edu = styled.section`
  background: #fff;
`

// Секция 'Cases'

export const Cases = styled.section`
  background: var(--color-primary);
`

// Секция 'Call'

export const Call = styled.section`
  background: #fff;
`

// Изображение автора

export const AnclaevImage = styled(Image)`
  pointer-events: none;
  user-select: none;
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 0;

  &,
  & * {
    height: 100%;
  }

  @media screen and (max-width: 1250px) {
    right: 0;
  }

  @media screen and (max-width: 992px) {
    right: -210px;
  }

  @media screen and (max-width: 576px) {
    display: none;
  }
`
