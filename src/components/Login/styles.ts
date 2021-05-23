import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

export const Logo = styled.div`
  img {
    object-fit: contain;
    height: 150px;
  }
`;

export const Button = styled.button`
  width: 300px;
  background-color: #738adb;
  color: #eff2f5;
  font-weight: 800;
  border: 0;
  outline: 0;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  transition: all 0.2s cubic-bezier(0.42, 0, 0.58, 1) 0.2s;

  &:hover {
    background-color: #000;
    color: #738adb;
  }
`;
