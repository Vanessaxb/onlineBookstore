import { useState, useEffect } from "react";
import { getAllUsers } from "../utilities/users-api";
import styles from './EditUsersPage.module.css'
import { Link, useNavigate} from 'react-router-dom'
import {remove} from '../utilities/users-api'

export default function AllUsersPage({ user }) {
  const [users, setUsers] = useState(null);
  console.log(users);

  const navigate = useNavigate()

  const handleDelete = async (user) => {
    try {
        await remove(user)
        // navigate('/users', { replace: true })
        window.location.reload()
    } catch (error) {
        console.error('Error deleting user:', error);
      }
  }

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
              Name: {user.name}
              <br/>
              Email: {user.email}
              <br/>
              Password: ******
              <br/>
              IsAdmin: {user.isAdmin ? 'Yes' : 'No'}

              {!user.isAdmin && 
              <Link to={`/users/${user._id}/update`} user={user} className="button btn-sm">Update User</Link>}
              
              {!user.isAdmin && 
                <Link to="" onClick={ () => handleDelete(user._id)} user={user} className="button btn-sm">Delete User</Link>}
            </ul>
          );
        })}
    </main>
  );
}
