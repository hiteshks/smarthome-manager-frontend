import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white px-6 md:px-12 py-4 fixed top-0 w-full z-50 flex justify-between items-center">
      <div className="text-xl font-bold text-gray-800">
        <Link to="/">SmartHome</Link>
      </div>
      <div className="space-x-6 text-gray-700 flex ml-auto">
        <Link to="/">Home</Link>
        <Link to="/devices">Devices</Link>
        <Link to="/routines">Routines</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
