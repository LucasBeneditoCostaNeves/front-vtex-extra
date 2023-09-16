import { styled } from "styled-components";

export const DivStyleCardModal = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;

  .white {
    background-color: var(--white);
    width: 78%;
    padding: 20px 30px;
    margin: 0 auto;
    height: max-content;
    display: flex;
    max-width: 420px;
    justify-content: space-between;
    border-radius: 8px;
  }

  img {
    width: 100px;
    height: 100px;
  }

  .close {
    position: relative;
    top: 0px;
    left: 10px;
  }
  .column {
    display: flex;
    flex-direction: column;

    h2 {
      font-size: 16px;
      margin-bottom: 12px;
    }

    h3 {
      margin-bottom: 10px;
      color: #041e50;
      font-size: 20px;
      font-weight: 600;
    }

    .description {
      font-size: 10px;
      margin-bottom: 15px;
    }
    .ancora {
      font-size: 12px;
    }
  }

  .input {
    display: flex;
    margin-top: 10px;
    border: 1px solid #041e50;
    padding: 10px 20px;
    border-radius: 6px;
    width: max-content;
    font-size: 22px;
    font-weight: 600;

    h3 {
      margin: 2px 10px 0px 13px;
      font-weight: 400;
      font-size: 18px;
      width: 14px;
    }

    span {
      cursor: pointer;
    }
  }

  button {
    background-color: var(--pink);
    color: var(--white);

    border-radius: 4px;
    border: none;

    width: 100%;
    display: flex;
    text-align: center;
    justify-content: center;
    margin: 20px auto 0px;

    padding: 15px 0px;

    font-size: 18px;
    font-weight: 600;

    cursor: pointer;
  }

  @media (min-width: 600px) {
    .white {
      padding: 20px 40px;
    }

    img {
      width: 200px;
      height: 200px;
    }
  }
`;
