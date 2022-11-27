import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Visibility = "all" | "done" | "todo";

type VisbilityState = {
  visibility: Visibility;
};

const initialState: VisbilityState = {
  visibility: "all",
};

const visibilitySlice = createSlice({
  name: "visibility",
  initialState,
  reducers: {
    setVisibility(state, action: PayloadAction<Visibility>) {
      state.visibility = action.payload;
    },
  },
});

export const { setVisibility } = visibilitySlice.actions;

export default visibilitySlice.reducer;
