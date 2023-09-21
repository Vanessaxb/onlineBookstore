import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { update, getUserById } from "../utilities/users-api";

export default function EditUsersPage({ user }) {
  const { id } = useParams();

//   console.log(user);
  const navigate = useNavigate();

  const [userFormData, setUserFormData] = useState( 
    {
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin, // Assuming isAdmin is a boolean
  }
  ); //! is this line that's causing the problem?

  useEffect(() => {
    const fetchUser = async () => {
        try {
            const response = await getUserById(id);
            console.log("API Response:", response);
            const userData = await response.json();
            console.log("User Data:", userData);
            setUserFormData(userData);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };
    
    fetchUser();
  }, []);

  const handleChange = (e) => {
    setUserFormData({
      ...userFormData,
      [e.target.name]: e.target.value,
    });
  };

  console.log(userFormData);

  const handleSubmit = async (e) => {
    e.preventDefault()
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
              type="checkbox"
              name="isAdmin"
              defaultValue={userFormData?.isAdmin? 'true' : 'false'}
              onChange={handleChange}
              
            />

            <button type="submit">Update</button>
          </form>
        </div>
      )}
    </div>
  );
}
