import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getMovies = createAsyncThunk(
  "movie/getMovies",
  async (_, thunkAPI) => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=39d997a6757716f9936f001f6441d497&language=en-US"
    );
    return res;
  }
);

const UserSlice = createSlice({
  name: "movie",
  initialState: { movies: [], isLoading: false },
  extraReducers: {
    [getMovies.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getMovies.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.movies = action.payload.data.results;
    },
    [getMovies.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export default UserSlice.reducer;
