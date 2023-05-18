import React, { useEffect } from "react";
import Movie from "./Movie";
import Paging from "./Paging";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../Redux/MovieSlice";

const MoviesList = ({ getPages, totalPages }) => {
  const dispatch = useDispatch();
  const { movies, isLoading } = useSelector((state) => state.Movie);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <div
      className="d-flex gap-3 p-2 pt-3"
      style={{ flexWrap: "wrap", justifyContent: "center" }}
    >
      {isLoading ? (
        <h1>Loading....</h1>
      ) : (
        movies.map((item) => <Movie movie={item} key={item.id} />)
      )}
      <Paging />
    </div>
  );
};

export default MoviesList;
