import { styled } from "styled-components";

export const DivStyledSession = styled.div`
  .flex {
    width: 90%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    justify-content: space-evenly;
    flex-wrap: wrap;
    height: 279px;
  }

  .title {
    font-size: 23px;
    font-weight: 600;
    color: var(--pink);
    text-align: center;
    margin-bottom: 10px;
  }

  span {
    font-size: 12px;
    font-weight: 700;
    color: var(--grey-4);
    text-align: center;
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
  }

  .logos {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 304px;
  }

  .logos img {
    padding: 50px 5px;
    border-radius: 500px;
    margin: 10px;
    max-width: calc(20% - 20px);
    box-sizing: border-box;
    flex-grow: 1;
    min-width: 100px;
    padding: 33px 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  @media (min-width: 935px) {
    .logos {
      margin-top: 50px;
    }

    .logos img {
      padding: 60px 30px;
      width: 50px;
      min-width: 50px;
      max-width: 150px;
    }
  }
`;
