import { VoiceIcons, VoiceInfo, Wrapper } from "./styles";
import { AiFillSignal, AiOutlineInfoCircle } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";
const Voice = () => {
  return (
    <Wrapper>
      <AiFillSignal className="voiceIcon" />
      <VoiceInfo>
        <h3>Voice Connected</h3>
        <p>stream</p>
      </VoiceInfo>

      <VoiceIcons>
        <AiOutlineInfoCircle />
        <IoIosCall />
      </VoiceIcons>
    </Wrapper>
  );
};
export default Voice;
