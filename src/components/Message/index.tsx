import Avatar from "../Avatar";
import { Wrapper, Info } from "./styles";

interface User {
  email: string;
  photo: string;
  uid: string;
  displayName: string;
}

interface Timestamp {
  seconds: number;
  nanoseconds: number;
  toDate: any;
}

interface RootObject {
  message: {
    user: User;
    timestamp: Timestamp;
    message: string;
  };
}

const Message = ({ message }: RootObject) => {
  const { timestamp, user } = message;
  return (
    <Wrapper>
      <Avatar photo={user.photo} />
      <Info>
        <h4>
          {user.displayName}
          <span className="time">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{message.message}</p>
      </Info>
    </Wrapper>
  );
};

export default Message;
