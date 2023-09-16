import { styled } from "styled-components";

export const DivStyledTopHeader = styled.div`
  display: none;
  justify-content: space-around;

  width: 90%;

  margin: 0 auto;

  padding-top: 4px;
  padding-bottom: 2px;

  .text-content {
    display: flex;
    align-items: center;

    height: max-content;

    font-size: 10px;

    img {
      width: 20px;
      height: 20px;

      margin-right: 10px;
    }

    .h6-pink {
      color: var(--pink);

      margin-right: 5px;
    }

    .h6-gray {
      color: gray;

      margin-right: 5px;
    }
  }

  @media (min-width: 600px) {
    display: flex;
    .text-content {
      font-size: 12px;
    }
  }
`;
