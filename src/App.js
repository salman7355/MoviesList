import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import ActionBar from "./Components/ActionBar";
import MoviesList from "./Components/MoviesList";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import MovieDetails from "./Components/MovieDetails";

function App() {
  const [Movies, setMovies] = useState([]);
  const [totalPages, setTotal] = useState(0);

  const getMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=39d997a6757716f9936f001f6441d497&language=en-US"
    );
    setMovies(res.data.results);
    //console.log(res.data.total_pages);
    setTotal(res.data.total_pages);
  };

  useEffect(() => {
    getMovies();
  }, []);

  const getFilteredMovie = async (word) => {
    if (word === "") {
      getMovies();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=39d997a6757716f9936f001f6441d497&language=en-US&query=${word}`
      );
      setMovies(res.data.results);
      setTotal(res.data.total_pages);
    }
  };

  const getPages = async (pageCount) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=39d997a6757716f9936f001f6441d497&language=en-US&page=${pageCount}`
    );
    setMovies(res.data.results);
    setTotal(res.data.total_pages);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <ActionBar getFilteredMovie={getFilteredMovie} />
        <Routes>
          <Route
            path="/"
            element={
              <MoviesList
                movies={Movies}
                getPages={getPages}
                totalPages={totalPages}
              />
            }
          />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
