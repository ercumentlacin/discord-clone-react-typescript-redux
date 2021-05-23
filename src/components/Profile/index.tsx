import { Icons, Info, Wrapper } from "./styles";
import { IoSettingsSharp } from "react-icons/io5";
import { BsFillMicFill } from "react-icons/bs";
import { IoMdHeadset } from "react-icons/io";
import { User } from "../../features/userSlice";
import { FC } from "react";
import Avatar from "../Avatar";

interface IProfileProps {
  user: User;
}

const Profile: FC<IProfileProps> = (props) => {
  const {
    user: { displayName, uid, photo }
  } = props;

  return (
    <Wrapper>
      <Avatar photo={photo} />

      <Info>
        <h3>{displayName}</h3>
        <p>{uid.substring(0, 5)}</p>
      </Info>

      <Icons>
        <BsFillMicFill />
        <IoMdHeadset />
        <IoSettingsSharp />
      </Icons>
    </Wrapper>
  );
};
export default Profile;
