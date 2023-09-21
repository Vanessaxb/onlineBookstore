import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { update, getUserById } from "../utilities/users-api";

export default function EditUsersPage({ setUser }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userFormData, setUserFormData] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUserById(id);
      console.log(userData);
      setUserFormData(userData);
    };
    fetchUser();
  }, []);

  const handleChange = (e) => {
    setUserFormData({
      ...userFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    // e.preventDefault()
    try {
        const updatedUser = await update(id, userFormData)

    } catch (error) {
        console.log(error);
    }
  }

  return (
    <div>
      {userFormData && (
        <div className="userForm-container">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              defaultValue={userFormData?.name}
              onChange={handleChange}
              required
            />

            <label>Email</label>
            <input
              type="text"
              name="email"
              defaultValue={userFormData?.email}
              onChange={handleChange}
              required
            />

            <label>IsAdmin</label>
            <input
              type="text"
              name="email"
              defaultValue={userFormData?.isAdmin}
              onChange={handleChange}
              required
            />

            <button type="submit">Update</button>
          </form>
        </div>
      )}
    </div>
  );
}
