import { styled } from "styled-components";

export const DivStyledCard = styled.div`
  padding: 10px 10px;

  width: 20%;
  min-width: 150px;
  max-width: 200px;

  margin-right: 15px;

  box-shadow: 1px 3px 10px 0px rgba(0, 0, 0, 0.22);

  img {
    width: 100%;
  }
  button {
    background-color: var(--pink);
    color: var(--white);

    border-radius: 4px;

    width: 100%;
    display: flex;
    text-align: center;
    justify-content: center;
    margin: 0 auto;
  }

  h5 {
    font-size: 14px;
    margin-bottom: 12px;
    display: -webkit-box;

    text-overflow: ellipsis;

    overflow: hidden;

    -webkit-line-clamp: 1;

    -webkit-box-orient: vertical;
  }

  .risk {
    width: max-content;
    position: relative;
    border-bottom: 2px solid gray;
    margin-bottom: 10px;
  }

  h4 {
    display: flex;
    justify-content: flex-start;
    position: relative;
    top: 9px;
    font-size: 14px;
    color: var(--grey-1);
  }

  h1 {
    padding-top: 5px;
    font-weight: 700;
  }

  h6 {
    margin-top: 6px;
    font-size: 12px;
    margin-bottom: 7px;
  }

  span {
    margin-top: 10px;
    color: var(--pink);
  }

  button {
    margin-top: 10px;
  }
`;
