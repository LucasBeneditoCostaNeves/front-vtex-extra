import { styled } from "styled-components";

export const RegisterStyle = styled.div`
  font-family: sans-serif;

  img {
    display: flex;
    justify-content: center;
    margin: 5% auto 10px;
  }

  h1 {
    display: flex;
    justify-content: center;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 22px;
    font-weight: 800;
  }

  h2 {
    display: flex;
    justify-content: center;

    color: var(--grey-3);
    font-weight: 500;
  }

  form {
    background-color: #ffffff;
    width: 80%;
    max-width: 215px;
    margin: 10px auto 50px;
    padding: 20px 35px;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.15) 23.95px 17.95px;
    border: 2px solid #b1afaf;
  }

  form > div {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  label {
    display: flex;
    position: absolute;
    top: 13px;
    left: 10px;
    background: var(--white);
  }

  input {
    height: 40px;
    border-radius: 8px;
    margin-top: 20px;
    width: 100%;
  }

  h2 {
    font-size: 13px;
  }

  .button {
    display: block;
    margin: 0px auto 16px;
    height: 50px;
    width: 107%;
    margin-bottom: 16px;
    border: none;
    background: var(--pink);
    color: var(--white);
    border-radius: 8px;
    margin-top: 10px;
    font-size: 16px;
  }

  a {
    margin-bottom: 10px;
    text-decoration: none;
    color: var(--cinza-4);
    font-size: 12px;
    font-weight: 600;
    display: flex;
    justify-content: center;
  }

  span {
    margin: 0 auto;
    color: var(--alert-1);
  }
`;
