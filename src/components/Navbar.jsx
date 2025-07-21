import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/devices">Devices</Link> |{" "}
      <Link to="/routines">Routines</Link>
    </nav>
  );
}

export default Navbar;
