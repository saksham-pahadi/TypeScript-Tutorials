import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


type User = {
  id: number;
  name: string;
};

type UserState = {
  users:User[];
}

const initialState: UserState = {
  users:[]
};

const userSlice = createSlice({
  name: "user",

  initialState,

   reducers: {
    addUser: (
      state,
      action: PayloadAction<User>
    ) => {
      state.users.push(
        action.payload
      );
    },

    removeUser: (
      state,
      action: PayloadAction<number>
    ) => {
      state.users = state.users.filter(
        (user) =>
          user.id !==
          action.payload
      );
    },
  },
});

export const {
  addUser,
  removeUser
} = userSlice.actions;

export default userSlice.reducer;