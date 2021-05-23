import { FC } from "react";
import { auth, provider } from "../../firebase";
import { Button, Logo, Wrapper } from "./styles";

const Login: FC = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((e) => console.log(e.message));
  };

  return (
    <Wrapper>
      <Logo>
        <img src="logo.png" alt="logo" />
      </Logo>

      <Button onClick={signIn}>Sign In</Button>
    </Wrapper>
  );
};

export default Login;
