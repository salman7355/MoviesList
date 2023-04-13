import React from "react";
import Movie from "./Movie";
import Paging from "./Paging";

const MoviesList = ({ movies, getPages, totalPages }) => {
  return (
    <div
      className="d-flex gap-3 p-2 pt-3"
      style={{ flexWrap: "wrap", justifyContent: "center" }}
    >
      {movies.map((item) => (
        <Movie movie={item} key={item.id} />
      ))}
      <Paging getPages={getPages} totalPages={totalPages} />
    </div>
  );
};

export default MoviesList;
