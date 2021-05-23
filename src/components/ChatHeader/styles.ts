import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: gray;
  padding: 10px;

  > svg {
    margin-left: 10px;
  }
`;

export const Left = styled.div`
  h3 {
    display: flex;
    align-items: center;
    color: white;
  }

  .hash {
    color: gray;
    font-size: 30px;
    padding: 10px;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 10px;

  svg {
    margin: 5px;
    cursor: pointer;

    &:hover {
      color: white;
    }
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  color: gray;
  background-color: #2f3135;
  border-radius: 3px;
  padding: 3px;

  input {
    background-color: transparent;
    outline: 0;
    color: white;
    border: none;
  }
`;
