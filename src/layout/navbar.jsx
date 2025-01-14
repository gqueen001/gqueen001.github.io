import "../styles/navbar.css";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <img src="/logo.png" alt="Logo" />
        <div className="links">
          <Link to="/home" className="link">
            Home page
          </Link>
          <Link to="/privacy-and-polacy" className="link">
            Privacy and Policy
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
