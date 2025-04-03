import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from './contactsSlice';
import fillersReduser from './filtersSlice';


const store = configureStore({
reducer: {
    contacts: contactsReducer,
    filters: fillersReduser,
},
middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
           api: `${baseURL}`,
           l: 20,
        },
      },
    }),
});


    