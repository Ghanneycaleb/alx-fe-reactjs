import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <h1>React Router Demo</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <Link to="/about">About</Link>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <Link to="/blog/1">Blog</Link>
          <NavLink to="/blog/1">Blog</NavLink>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <Link to="/login">Login</Link>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
