import { BsFillPeopleFill } from "react-icons/bs";
import { IoMdHelpCircle, IoMdNotifications, IoMdSearch } from "react-icons/io";
import { IoSendSharp } from "react-icons/io5";
import { MdEditLocation } from "react-icons/md";
import { Search, Left, Right, Wrapper } from "./styles";

interface IChatHeaderProps {
  channelName: string;
}

const ChatHeader = ({ channelName }: IChatHeaderProps) => {
  return (
    <Wrapper>
      <Left>
        <h3>
          <span className="hash">#</span>
          {channelName}
        </h3>
      </Left>

      <Right>
        <IoMdNotifications />
        <MdEditLocation />
        <BsFillPeopleFill />
      </Right>

      <Search>
        <input type="text" placeholder="Search" />
        <IoMdSearch />
      </Search>

      <IoSendSharp />
      <IoMdHelpCircle />
    </Wrapper>
  );
};

export default ChatHeader;
