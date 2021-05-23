import { useDispatch, useSelector } from "react-redux";
import Chat from "./components/Chat";
import SideBar from "./components/Sidebar";
import Login from "./components/Login";
import { login, logout, selectUser } from "./features/userSlice";
import { useEffect } from "react";
import { auth } from "./firebase";

export default function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);

      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  if (!user) {
    return <Login />;
  }

  return (
    <div className="App">
      <SideBar />
      <Chat />
    </div>
  );
}
