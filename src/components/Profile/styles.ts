import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: gray;
  background-color: #2f3135;
  padding: 10px;
  border-top: 1px solid gray;

  > svg {
    font-size: 2.5rem;
  }
`;

export const Info = styled.div`
  flex: 1;
  padding: 10px;

  h3 {
    color: white;
  }
`;

export const Icons = styled.div`
  svg {
    margin: 0 10px;
  }
`;
