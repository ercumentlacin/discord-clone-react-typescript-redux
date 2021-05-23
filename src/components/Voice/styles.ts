import styled from "styled-components";

export const Wrapper = styled.div`
  .voiceIcon {
    font-size: large;
    color: #4fb185;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: gray;
  background-color: #2f3135;
  padding: 10px;
  border-top: 1px solid gray;
`;

export const VoiceInfo = styled.div`
  flex: 1;
  padding: 10px;

  h3 {
    color: #4fb185;
  }

  p {
    font-size: smaller;
  }
`;

export const VoiceIcons = styled.div`
  svg {
    margin: 0 10px;
  }
`;
