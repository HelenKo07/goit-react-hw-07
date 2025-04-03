const { createSlice } = require("@reduxjs/toolkit");
const { build } = require("vite");

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  extraReducers: builder => {
    builder

  },
});
 