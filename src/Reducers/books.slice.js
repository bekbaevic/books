import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  books: [
    {
      id: 1,
      title: "Atom odatlar",
      pages: 243,
      author: "Jeyms Klir",
      datePublication: 2018,
      status: "New",
      date: 2024,
    },
    {
      id: 2,
      title: "Yulduzli tunlar",
      pages: 203,
      author: "Muhammad Ali",
      datePublication: 2002,
      status: "Reading",
      date: 2024,
    },
    {
      id: 3,
      title: "Chol va dengiz",
      pages: 243,
      author: "Erneste Xeminguey",
      datePublication: 2008,
      status: "Finished",
      date: 2024,
    },
  ],
  filteredBooks: [],
};

const BooksSlice = createSlice({
  name: "Books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    deleteBook: (state, action) => {
      state.books = state.books.filter((item) => item.id !== action.payload.id);
    },
    setStatus: (state, action) => {
      if (
        state.books.find((item) => item.id === action.payload.id).status ===
        "New"
      ) {
        state.books.find((item) => item.id === action.payload.id),
          (state.books.find((item) => item.id === action.payload.id).status =
            "Reading");
      } else if (
        state.books.find((item) => item.id === action.payload.id).status ===
        "Reading"
      ) {
        state.books.find((item) => item.id === action.payload.id),
          (state.books.find((item) => item.id === action.payload.id).status =
            "Finished");
      }
    },
  },
});

export const { addBook, deleteBook, filterBooks, setStatus } =
  BooksSlice.actions;
export default BooksSlice.reducer;
