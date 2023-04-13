import React from "react";

const Try = () => {
  const MovieInfo = ({ name, value }) => (
    <div className={`movie__${name}`}>
      <span className="info__head">{name.replace((l) => l.toUpperCase())}</span>
      {value}
    </div>
  );

  return (
    <div className="movie" style={{ backgroundImage: "logo512.png" }}>
      <h2 className="movie_title">Title</h2>
      <span className="movie__description">Description</span>
      <div className="movie__infos">
        <MovieInfo name="duration" value="director" />
        <MovieInfo name="director" value="director" />
        <MovieInfo name="year" value="year" />
        <MovieInfo name="cast" value="cast" />
      </div>
    </div>
  );
};

export default Try;
