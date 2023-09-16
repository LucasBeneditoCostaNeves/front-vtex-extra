import { styled } from "styled-components";

export const DivStyledBackground = styled.div`
  position: relative;

  color: var(--white);

  font-weight: 500;
  font-size: 20px;

  img {
    width: 100%;
    min-height: 190px;
  }

  div {
    position: absolute;
    top: 47px;
    left: 10%;
  }

  h1 {
    margin-bottom: 10px;
  }

  h2 {
    margin-bottom: 14px;
  }

  button {
    width: 136px;
    height: 38px;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
    color: var(--white);
    background: var(--pink);
    font-size: 15px;
    font-weight: 700;
  }

  @media (min-width: 600px) {
    font-size: 33px;

    img {
      min-height: 285px;
    }

    button {
      width: 195px;
      height: 60px;

      border: none;
      border-radius: 5px;
      margin-top: 36px;

      color: var(--white);
      background: var(--pink);

      font-size: 18px;
      font-weight: 700;
    }
  }
`;
