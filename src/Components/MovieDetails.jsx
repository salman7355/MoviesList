import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const MovieDetails = () => {
  const param = useParams();
  console.log(param.id);
  const [detail, setDetail] = useState([]);

  const getSpecificMovie = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${param.id}?api_key=39d997a6757716f9936f001f6441d497&language=en-US`
    );
    setDetail(res.data);
  };

  useEffect(() => {
    getSpecificMovie().then(r => console.log(r));
  } );

  return (
    <div className="d-flex bg-dark text-white">
      <div className="d-flex justify-content-start ">
        <Card.Img
          className="shadow"
          style={{ width: "28rem", height: "91vh", borderRadius: "4px" }}
          src={`https://image.tmdb.org/t/p/w500/${detail.poster_path}`}
        />
      </div>
      <div className="text">
        <div className="mt-4">
          <h1 style={{ textAlign: "center" }}>{detail.title}</h1>
          <p className="mt-3 mb-3">{detail.release_date}</p>
          <p>Rate : {detail.vote_average}</p>
        </div>
        <div>
          <div className="mt-5 m-4 text-justify">
            <h2>Story</h2>
            <p style={{ lineHeight: 2 }}>{detail.overview}</p>
          </div>
          <div className="d-flex justify-content-between m-4 align-items-end">
            <a href={detail.homepage} target="_blanck">
              <Button variant="warning">Watch Movie</Button>
            </a>
            <Link to={"/"}>
              <Button variant="warning">Back Home</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
