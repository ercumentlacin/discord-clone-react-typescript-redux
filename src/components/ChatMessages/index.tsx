import { Wrapper } from "./styles";
import Message from "../Message";

interface ICgatMessages {
  messages: [] | any;
}

const ChatMessages = ({ messages }: ICgatMessages) => {
  return (
    <Wrapper>
      {messages.reverse().map((message: any, index: string) => (
        <Message key={index} message={message} />
      ))}
    </Wrapper>
  );
};
export default ChatMessages;
