import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Movie({ movie }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Link to={`/movie/${movie.id}`}>
        <Card.Img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        />
      </Link>
    </Card>
  );
}

export default Movie;
