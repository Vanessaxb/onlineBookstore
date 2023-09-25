import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import styles from './NavBar.module.css'

function NavBar({ user, setUser }) {
  const handleLogout = () => {
    userService.logOut();
    setUser(null);
  };

  return (
    <nav className={styles.navbar}>
      <h2 className="navbar-title">Welcome, {user.name}</h2>
      <div className="navbar-link">
      <Link to="/orders/new" className="navbar-link">HOME</Link>
      &nbsp;  &nbsp;
      <Link to="/orders" className="navbar-link">ORDER HISTORY</Link>
      &nbsp; &nbsp;
      {user.isAdmin &&
      <Link to="/items/new" className="navbar-link">CREATE NEW BOOK</Link>}
      &nbsp;  &nbsp;
      {user.isAdmin &&
      <Link to="/users" className="navbar-link">USERS</Link>}
      &nbsp;  &nbsp; &nbsp;
      <Link to="" onClick={handleLogout} className="navbar-link">LOG OUT</Link>
      </div>
    </nav>
  );
}

export default NavBar;
