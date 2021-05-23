import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.25;
  height: 100vh;
  background-color: #2f3135;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #2f3135;
  color: white;
  border-bottom: 3px solid #26282c;
`;

export const Channels = styled.div`
  flex: 1;
  overflow: scroll;

  .channels__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #2f3135;
    color: gray;

    .sidebar__header {
      display: flex;
      align-items: center;
    }
  }

  .addChannel {
    cursor: pointer;

    &:hover {
      color: white;
    }
  }
`;

export const ChannelList = styled.div``;
