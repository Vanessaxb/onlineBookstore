import { Link } from "react-router-dom";
import * as userService from "../utilities/users-service";

function NavBar({ user, setUser }) {
  const handleLogout = () => {
    userService.logOut();
    setUser(null);
  };

  return (
    <nav className="navbar">
      <h2 className="navbar-title">Welcome, {user.name}</h2>
      <Link to="/orders/new" className="navbar-link">Home</Link>
      &nbsp; | &nbsp;
      <Link to="/orders" className="navbar-link">Order History</Link>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogout} className="navbar-link">Log out</Link>
      &nbsp; | &nbsp;
      {user.isAdmin &&
      <Link to="/items/new" className="navbar-link">Create New Book</Link>}
      &nbsp; | &nbsp;
      {user.isAdmin &&
      <Link to="/users" className="navbar-link">Users</Link>}
    </nav>
  );
}

export default NavBar;
