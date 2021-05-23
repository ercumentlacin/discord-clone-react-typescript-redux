import styled from "styled-components";

export const Wrapper = styled.div`
  &:hover > h4 {
    color: white;
    background-color: #40464b;
  }

  > h4 {
    display: flex;
    padding-left: 15px;
    align-items: center;
    background-color: #2f3135;
    color: gray;
    cursor: pointer;
  }

  .hash {
    font-size: 30px;
    padding: 8px;
  }
`;
