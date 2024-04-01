import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../Reducers/users.slice";
import booksSlice from "../Reducers/books.slice";

export const store = configureStore({
  reducer: { user: usersSlice, books: booksSlice },
});
