import * as React from "react";
import { Top, Wrapper, Channels, ChannelList } from "./styles";
import { MdExpandMore } from "react-icons/md";
import { GrFormAdd } from "react-icons/gr";

// Components
import SideBarChannel from "../SideBarChannel";
import Voice from "../Voice";
import Profile from "../Profile";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import db from "../../firebase";

export interface Channel {
  channelName: string;
}

export interface IChannels {
  id: string;
  channel: Channel;
}

const SideBar = () => {
  const user = useSelector(selectUser);

  const [channels, setChannels] = React.useState<IChannels[]>([]);

  React.useEffect(() => {
    db.collection("channels").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          channel: doc.data() as Channel
        }))
      )
    );
  }, []);

  const handleAddChannel = () => {
    const channelName = prompt("Enter a new channel name");

    if (channelName) {
      db.collection("channels").add({
        channelName
      });
    }
  };

  return (
    <Wrapper>
      <Top>
        <h3>Discord</h3>
        <MdExpandMore />
      </Top>

      <Channels>
        <div className="channels__header">
          <div className="sidebar__header">
            <MdExpandMore />
            <h4>Text Channel</h4>
          </div>
          <GrFormAdd className="addChannel" onClick={handleAddChannel} />
        </div>

        <ChannelList>
          {channels.map((channel: IChannels) => (
            <SideBarChannel key={channel.id} channel={channel} />
          ))}
        </ChannelList>
      </Channels>

      <Voice />

      <Profile user={user} />
    </Wrapper>
  );
};

export default SideBar;
