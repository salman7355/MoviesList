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
    getSpecificMovie();
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-center mt-5">
        <Card style={{ width: "38rem" }}>
          <Card.Img
            src={`https://image.tmdb.org/t/p/w500/${detail.poster_path}`}
          />
          <Card.Body>
            <Card.Title>{detail.title}</Card.Title>
            <Card.Text>{detail.release_date}</Card.Text>
            <Card.Text>{detail.vote_count}</Card.Text>
            <Card.Text>{detail.vote_average}</Card.Text>
            {/* we 3ayz a7ot ngoom */}
          </Card.Body>
        </Card>
      </div>
      <div>
        <h2>Story</h2>
        <p>{detail.overview}</p>
      </div>
      <div className="d-flex justify-content-evenly">
        <a href={detail.homepage}>
          <Button variant="warning">Watch Movie</Button>
        </a>
        <Link to={"/"}>
          <Button variant="warning">Back Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default MovieDetails;
