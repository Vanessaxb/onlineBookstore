import { useState, useEffect } from "react";
import { getAllUsers } from "../utilities/users-api";
import styles from './EditUsersPage.module.css'

export default function EditUsersPage({ user }) {
  const [users, setUsers] = useState(null);
  console.log(users);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersData = await getAllUsers();
      console.log(usersData);
      setUsers(usersData);
    };
    fetchUsers();
  }, []);

  return (
    <main className={styles.EditUsersPage}>
      <h1>Users page</h1>
      <ul className="users-show"></ul>
      {users &&
        users.map((user) => {
          return (
            <ul key={user._id}>
              {user.name}

              {user.email}
              {user.password}
              {user.isAdmin}
            </ul>
          );
        })}
    </main>
  );
}
