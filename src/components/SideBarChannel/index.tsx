import * as React from "react";
import { useDispatch } from "react-redux";
import { setChannelInfo } from "../../features/appSlice";
import { Wrapper } from "./styles";

interface ISideBarChannelProps {
  channel: {
    channel: {
      channelName: string;
    };
    id: string;
  };
}

const SideBarChannel = (props: ISideBarChannelProps) => {
  const {
    channel: {
      channel: { channelName },
      id
    }
  } = props;

  const dispatch = useDispatch();

  return (
    <Wrapper
      onClick={() =>
        dispatch(
          setChannelInfo({
            channelId: id,
            channelName
          })
        )
      }
    >
      <h4>
        <span className="hash">#</span> {channelName}
      </h4>
    </Wrapper>
  );
};

export default SideBarChannel;
