import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  is_dark_mode: false,
};

const statusInfoSlices = createSlice({
  name: "data",
  initialState,
  reducers: {
    setIsDarkMode: (state, action) => {
      state.is_dark_mode = action.payload;
    },
  },
});

export const { setIsDarkMode } = statusInfoSlices.actions;

export default statusInfoSlices.reducer;
