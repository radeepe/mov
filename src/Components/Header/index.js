import { Link } from "react-router-dom";
import { Nav } from 'react-bootstrap';
export default function Header() {


  return (
    <header class="p-3 bg-dark text-secondary">
      <div class="container d-flex">
        <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
        <Nav.Link as={Link} to={"/latestMovies"}>Latest Movies</Nav.Link>
        <Nav.Link as={Link} to={"/upcomingMovies"}>Upcoming Movies</Nav.Link>
        <Nav.Link as={Link} to={"/events"}>Nearby Events</Nav.Link>
      </div>
    </header>
  );
}