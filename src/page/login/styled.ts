import { styled } from "styled-components";

export const DivStyled = styled.div`
  .full-div {
    display: flex;
    justify-content: space-around;
    margin-top: 10%;
  }

  .card {
    width: 0px;
    height: 0px;
    display: flex;
  }

  .div-form {
    width: max-content;
    height: 380px;
    padding: 0px 32px;
    margin: 35px auto 0px;
    box-shadow: rgba(0, 0, 0, 0.15) 23.95px 17.95px;
    border: 2px solid #b1afaf;

    background-color: white;

    border-radius: 6px;

    text-align: center;

    h1 {
      margin-top: 30px;

      font-size: 25px;
      font-weight: 800;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    h5 {
      margin: 8px 0px 10px;
      font-size: 13px;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
        0px 2px 2px rgba(0, 0, 0, 0.25);
    }
  }

  .button {
    width: 204px;
    height: 49px;

    color: white;
    background: #f71963;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    border-radius: 8px;
    border: none;

    font-size: 18px;
    margin: 32px 0px 10px;

    cursor: pointer;
  }

  .alert {
    font-size: 13px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
      0px 2px 2px rgba(0, 0, 0, 0.25);

    cursor: pointer;
    display: block;
  }

  .logo {
    display: flex;
    margin: 0 auto;
  }

  @media (min-width: 690px) {
    .div-black {
      display: flex;
    }

    .div-logo {
      display: none;
    }

    .position {
      flex-direction: row;
      top: 54%;
    }

    .div-form {
      border-radius: 8px 8px 8px 8px;
    }
    .card {
      width: 360px;
      height: 360px;
      margin-top: 35px;
    }
  }

  @media (min-width: 750px) {
    .card {
      width: 40%;
      height: 40%;
      max-width: 300px;
    }

    .full-div {
      margin-top: 60px;
    }
  }
`;
