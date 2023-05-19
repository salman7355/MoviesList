// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getFilteredMovies, getMovies } from "../Redux/MovieSlice";

function ActionBar() {
  const dispatch = useDispatch();
  const Search = (word) => {
    if (word === "") {
      dispatch(getMovies());
    } else {
      dispatch(getFilteredMovies(word));
    }
  };

  return (
    <Navbar bg="white" className="shadow">
      <Container>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Navbar.Brand>MoVV</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <Form.Control
              onChange={(e) => Search(e.target.value)}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ActionBar;
