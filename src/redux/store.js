import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import filersReduser from "./filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filersReduser,
  },
});
