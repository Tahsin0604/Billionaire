import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersList: [],
  singleUser: {},
  usersLoading: true,
  detailsLoading: true,
  isError: false,
  error: "",
};
export const fetchUsersList = createAsyncThunk(
  "userSlice/userList",
  async () => {
    const res = await fetch("https://server-tahsin0604.vercel.app/profiles");
    const data = await res.json();
    console.log(data);
    return data;
  }
);
export const fetchSingleUser = createAsyncThunk(
  "userSlice/singleUser",
  async (id) => {
    const res = await fetch(
      `https://server-tahsin0604.vercel.app/profiles/${id}`
    );
    const details = await res.json();
    return details;
  }
);
const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersList.pending, (state) => {
        state.usersList = [];
        state.singleUser = {};
        state.usersLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchUsersList.fulfilled, (state, { payload }) => {
        state.usersList = payload;
        state.singleUser = {};
        state.usersLoading = false;
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchUsersList.rejected, (state, action) => {
        console.log(action);
        state.usersList = [];
        state.singleUser = {};
        state.usersLoading = false;
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(fetchSingleUser.pending, (state) => {
        state.singleUser = {};
        state.detailsLoading = true;
        state.isError = false;
        state.error = "";
      })

      .addCase(fetchSingleUser.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.singleUser = payload;
        state.detailsLoading = false;
        state.isError = false;
        state.error = "";
      })

      .addCase(fetchSingleUser.rejected, (state, action) => {
        state.singleUser = {};
        state.detailsLoading = true;
        state.isError = false;
        state.error = action.error.message;
      });
  },
});
export default userSlice.reducer;
