import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <h2 className="logo">UrbanCart</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cart">
          Cart
          <span className="badge">{cartCount}</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
