import { createSlice } from "@reduxjs/toolkit";

export const selectNameFilters = (state) => state.filters.name || "";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    setNameFilter(state, action) {
      state.name = action.payload || "";
    },
  },
});

export default filtersSlice.reducer;

export const { setNameFilter } = filtersSlice.actions;
