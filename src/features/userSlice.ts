import { createSlice } from "@reduxjs/toolkit";

export interface User {
  uid: string;
  photo: string;
  email: string;
  displayName: string;
}

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    }
  }
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state: { user: { user: User } }) => {
  return state.user.user;
};

export default userSlice.reducer;
