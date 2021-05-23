import { FC, useEffect, useState } from "react";
import firebase from "firebase";
import { Wrapper } from "./styles";
import ChatHeader from "../ChatHeader";
import ChatInput from "../ChatInput";
import ChatMessages from "../ChatMessages";
import { useSelector } from "react-redux";
import { selectChannelId, selectChannelName } from "../../features/appSlice";
import { selectUser } from "../../features/userSlice";
import db from "../../firebase";

const Chat: FC = () => {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (channelId) {
      db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot: any) =>
          setMessages(snapshot.docs.map((doc: any) => doc.data()))
        );
    }
  }, [channelId]);

  const sendMessages = (e: any) => {
    e.preventDefault();

    db.collection("channels").doc(channelId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      user: user
    });

    setInput("");
  };

  return (
    <Wrapper>
      <ChatHeader channelName={channelName} />
      <ChatMessages messages={messages} />
      <ChatInput
        input={input}
        setInput={setInput}
        channelName={channelName}
        channelId={channelId}
        sendMessages={sendMessages}
      />
    </Wrapper>
  );
};
export default Chat;
