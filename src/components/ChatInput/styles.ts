import styled from "styled-components";

export const Wrapper = styled.div`
  color: lightgray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border-radius: 15px;
  margin: 20px;
  border-top: 1px solid gray;
  background-color: #474b53;

  svg {
    font-size: x-large;
  }
`;

export const Form = styled.form`
  flex: 1;

  input {
    padding: 15px;
    background-color: transparent;
    border: none;
    outline: 0;
    color: white;
    font-size: large;
    width: 100%;

    & + button {
      display: none;
    }
  }
`;

export const Icons = styled.div`
  svg {
    margin: 5px;
    font-size: 20px;
  }
`;
