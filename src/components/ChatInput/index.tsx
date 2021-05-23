import React from "react";
import { AiOutlineGif } from "react-icons/ai";
import { BsFillGiftFill } from "react-icons/bs";
import { MdAddCircle } from "react-icons/md";
import { Form, Icons, Wrapper } from "./styles";
import { HiEmojiHappy } from "react-icons/hi";

interface IChatInputProps {
  input: string;
  setInput: any;
  channelId: string;
  channelName: string;
  sendMessages: any;
}

const ChatInput = ({
  input,
  setInput,
  channelId,
  channelName,
  sendMessages
}: IChatInputProps) => {
  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => setInput(e.target.value);

  return (
    <Wrapper>
      <MdAddCircle />
      <Form onSubmit={sendMessages}>
        <input
          value={input}
          onChange={handleChange}
          disabled={!channelId}
          placeholder={`Message #${channelName}`}
          type="text"
        />
        <button onClick={sendMessages} disabled={!channelId} type="submit">
          Send Message
        </button>
      </Form>

      <Icons>
        <BsFillGiftFill />
        <AiOutlineGif />
        <HiEmojiHappy />
      </Icons>
    </Wrapper>
  );
};

export default ChatInput;
