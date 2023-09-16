import { styled } from "styled-components";

export const DivStyledNavigate = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 97%;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px;

  padding: 8px 0px;
  margin: 0 auto;

  width: 90%;

  color: var(--grey-1);

  .h4-only {
    padding: 2px 0px;
    display: flex;
    align-items: center;
    font-weight: 600;
  }

  div {
    display: flex;
    align-items: center;

    .h4-only {
      margin-left: 5px;
    }
  }

  @media (max-width: 850px) {
    overflow-y: auto;
    font-size: 13px;
    align-items: center;

    h4 {
      margin-right: 15px;
    }
  }

  .pink {
    color: var(--pink);
  }
`;
