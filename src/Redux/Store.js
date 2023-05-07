import { configureStore } from "@reduxjs/toolkit";
import MovieSlice from "./MovieSlice";

export const Store = configureStore({
  reducer: {
    Movie: MovieSlice,
  },
});
