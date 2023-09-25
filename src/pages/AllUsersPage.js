import styles from "./AllUsersPage.module.css";
import { useState, useEffect } from "react";
import { getAllUsers } from "../utilities/users-api";
import { Link, useNavigate } from "react-router-dom";
import { remove } from "../utilities/users-api";

export default function AllUsersPage({ user }) {
  const [users, setUsers] = useState(null);
  console.log(users);

  const navigate = useNavigate();

  const handleDelete = async (user) => {
    try {
      await remove(user);
      window.location.reload();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const usersData = await getAllUsers();
      console.log(usersData);
      setUsers(usersData);
    };
    fetchUsers();
  }, []);

  return (
    <main className={styles.AllUsersPage}>
      <h1>Users</h1>
      <ul className="users-show"></ul>
      {users &&
        users.map((user) => {
          return (
            <ul key={user._id}>
              <div className={styles.userItem}>
                <div className={styles.users}>
                  Name: {user.name}
                  <br />
                  Email: {user.email}
                  <br />
                  Password: ******
                  <br />
                  IsAdmin: {user.isAdmin ? "Yes" : "No"}
                  <br />
                  <br />
                </div>
                <div className="adminButtons2">
                  <Link
                    to={`/users/${user._id}/update`}
                    user={user}
                    className="btn-sma2"
                  >
                    Update User
                  </Link>

                  {!user.isAdmin && (
                    <Link
                      to=""
                      onClick={() => handleDelete(user._id)}
                      user={user}
                      className="btn-sma2"
                    >
                      Delete User
                    </Link>
                  )}
                </div>
              </div>
            </ul>
          );
        })}
    </main>
  );
}
