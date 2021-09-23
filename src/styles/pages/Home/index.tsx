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
  position: relative;
  background: var(--color-primary);
  overflow: hidden;
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
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);

  &,
  & * {
    height: 100%;
  }
`
