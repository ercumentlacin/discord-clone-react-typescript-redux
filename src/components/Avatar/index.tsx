import { IoPersonCircle } from "react-icons/io5";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";

const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
`;

interface IAvatarProps {
  photo: string;
}

const Avatar = (props: IAvatarProps) => {
  const { photo } = props;

  const handleClick = () => auth.signOut();

  const user = useSelector(selectUser);

  if (!user) {
    return <IoPersonCircle />;
  }
  return <Img src={photo} alt="" onClick={handleClick} />;
};

export default Avatar;
