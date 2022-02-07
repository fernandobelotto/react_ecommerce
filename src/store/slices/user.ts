import { createSlice } from "@reduxjs/toolkit";
import { fetchUserById, fetchUsers } from "../thunks/user";

const InitialState = {
  users: [],
  userDetail: {},
  isLoading: false,
};

const userSlice = createSlice({
  initialState: InitialState,
  
  name: "users",

  reducers: {

    setUsers: (state, action) => {
      state.users = action.payload;
    },

  },

  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });

    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.userDetail = action.payload;
    });
  },
});

export const { setUsers } = userSlice.actions;

export const UserReducer = userSlice.reducer;
