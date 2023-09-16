import styled from "styled-components";
import logo from "../../assets/loja.png";

export const DivStyledCardSession = styled.div`
  .full {
    position: relative;
  }

  img {
    width: 300px;
    height: 230px;
    border-radius: 8px;
  }

  .content {
    position: relative;
    bottom: 190px;
    color: var(--white);
    left: 0px;
    margin-left: 40px;
  }

  h2 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  h4 {
    width: 200px;
    margin-bottom: 20px;
  }

  button {
    background-color: var(--pink);
    border: none;
    padding: 10px 15px;
    border-radius: 4px;
    color: var(--white);
    font-weight: 800;
  }

  @media (min-width: 600px) {
    img {
      width: 420px;
    }
  }
`;
