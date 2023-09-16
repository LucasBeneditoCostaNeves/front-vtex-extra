import { styled } from "styled-components";

export const DivStyledList = styled.div`
  height: max-content;
  overflow-y: none;
  margin-bottom: 90px;
  h2 {
    color: var(--pink);
    font-size: 21px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    position: relative;
    top: 11px;
    width: max-content;
    background-color: var(--white);
    margin: 0 auto;
    padding: 0px 30px;
  }
  .line {
    width: 90%;
    border-bottom: 1px solid #bdbdbd;
    position: relative;
    margin: 0 auto 10px;
  }

  .div-buttons {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    width: 90%;
    margin: 15px auto 20px;
    overflow-x: auto;
  }

  button {
    background-color: var(--white);
    border: 1px solid #bdbdbd;
    font-size: 16px;
    font-family: "Poppins", sans-serif;
    padding: 6px 15px;
  }

  .list {
    position: relative;
    display: flex;
    width: 100%;
  }

  .button-left {
    position: relative;
    display: flex;
    align-content: center;
    top: 135px;
    left: 30px;
    height: 40px;
  }

  .button-right {
    position: relative;
    display: flex;
    align-content: center;
    top: 135px;
    right: 30px;
    height: 40px;
  }

  ul {
    display: flex;
    width: 80%;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: unset;
    margin: 0 auto;
    height: max-content;
    justify-content: center;
    flex-wrap: wrap;

    div {
      height: max-content;
    }
  }

  .risk {
    margin: none;
  }

  .list1 {
    animation: balanco 4s ease-in-out none;

    @keyframes balanco {
      0% {
        transform: translateX(0px);
      }
      100% {
        transform: translateX(-400%);
      }
    }
  }

  @media (min-width: 600px) {
    h2 {
      font-size: 24px;
    }
  }
`;
