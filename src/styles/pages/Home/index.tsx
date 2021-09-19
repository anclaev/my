import styled from "styled-components"

export const Title = styled.div`
  margin-bottom: 1.167rem;
  max-width: 60%;
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
`

export const Sub = styled.div`
  font-family: "Roboto Condensed";
  margin-bottom: 1rem;
  font-size: 1rem;
  line-height: 1.416666666666667;

  @media (max-width: 992px) {
    font-size: 0.667rem;
    margin-bottom: 0.667rem;
  }
`
