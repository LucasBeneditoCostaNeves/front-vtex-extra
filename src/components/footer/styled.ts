import { styled } from "styled-components";

export const DivStyledFooter = styled.div`
  width: 100%;
  background-color: var(--grey-4);
  color: var(--white);

  .column {
    display: flex;
    flex-direction: row;
    padding-top: 45px;
    padding-bottom: 25px;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .sobre {
    width: 192px;

    display: flex;
    flex-direction: column;
    margin-left: 60px;
    margin: 0 auto 50px;

    span + span {
      margin-top: 15px;
    }
  }

  .span-top {
    font-weight: 600;
    margin-bottom: 20px;
  }

  .social {
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin-top: 70px;
  }

  .info {
    width: max-content;
    display: flex;
    flex-direction: column;
    margin: 0 auto 50px;

    span + span {
      margin-top: 15px;
    }
  }

  .flex {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }

  .pay {
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    img {
      width: 200px;
    }
  }

  .form {
    width: 170px;
    max-height: 220px;
    padding: 20px 40px;

    color: var(--grey-4);
    background-color: var(--white);

    margin-right: 30px;
    margin: 0 auto;

    border-radius: 12px;

    .h4-1 {
      font-size: 16px;
      font-weight: 500;

      margin-bottom: 5px;
    }

    .h4-2 {
      font-size: 20px;
      font-weight: 700;

      margin-bottom: 20px;
    }

    span {
      display: flex;
      font-size: 13px;
      text-align: center;
    }

    div {
      margin-top: 40px;
    }

    input {
      width: 70%;
      padding: 10px 20px;
      border-radius: 4px;
      border: solid 1px var(--grey-4);
    }

    button {
      padding: 11px 14px;
      margin-left: 20px;

      border: none;
      border-radius: 4px;

      color: var(--white);
      background-color: var(--pink);

      font-weight: 600;
    }
  }

  .end {
    div {
      display: flex;
      justify-content: space-between;
      flex-direction: column;

      width: 90%;
      margin: 0 auto;
    }
    span {
      display: flex;
      width: 100%;
      font-size: 10px;
      text-align: center;
    }

    img {
      width: 200px;
      margin: 10px auto 0px;
    }
  }

  .div-input {
    display: flex;
    flex-direction: row;
  }

  @media (min-width: 600px) {
    .form {
      width: 309px;
      max-height: 180px;
    }

    .sobre {
      margin-left: 50px;
    }

    .info {
      margin-left: 80px;
    }
  }

  @media (min-width: 800px) {
    .pay {
      margin-left: 80px;
    }
  }

  @media (min-width: 1200px) {
    .end {
      div {
        flex-direction: row;
        align-items: center;
        padding-bottom: 10px;
      }
      span {
        width: 900px;
        text-align: left;
      }

      img {
        width: max-content;
        margin: 0;
      }
    }
  }
`;
