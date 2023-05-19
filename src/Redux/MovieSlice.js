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

export const getFilteredMovies = createAsyncThunk(
  "movie/getFilteredMovies",
  async (word, thunkAPI) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=39d997a6757716f9936f001f6441d497&language=en-US&query=${word}`
    );
    return res;
  }
);

export const getPages = createAsyncThunk(
  "movie/getPages",
  async (pageCount, thunkAPI) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=39d997a6757716f9936f001f6441d497&language=en-US&page=${pageCount}`
    );
    return res;
  }
);

const UserSlice = createSlice({
  name: "movie",
  initialState: { movies: [], isLoading: false, pages: 0 },
  extraReducers: {
    [getMovies.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getMovies.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.movies = action.payload.data.results;
      state.pages = action.payload.data.total_pages;
    },
    [getMovies.rejected]: (state, action) => {
      state.isLoading = false;
    },

    [getFilteredMovies.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getFilteredMovies.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.movies = action.payload.data.results;
      state.pages = action.payload.data.total_pages;
    },

    [getPages.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getPages.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.movies = action.payload.data.results;
    },
  },
});

export default UserSlice.reducer;
