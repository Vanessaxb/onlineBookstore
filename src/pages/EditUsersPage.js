import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { update, getUserById } from "../utilities/users-api";
import { toast } from "react-toastify";

export default function EditUsersPage() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [userFormData, setUserFormData] = useState({
    name: "",
    email: "",
    isAdmin: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUserById(id);
        console.log("API Response:", userData);
        console.log("User Data:", userData);
        setUserFormData(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    setUserFormData({
      ...userFormData,
      [e.target.name]: e.target.value,
    });
  };

  console.log(userFormData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedUser = await update(id, userFormData);
      toast.success("User Upated Successfuly!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      navigate("/users");
    } catch (error) {
      console.log(error);
    }
  };

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

            <label>Is Admin?</label>
            <div className="checkbox-container">
            <input
              type="checkbox"
              name="isAdmin"
              defaultValue={userFormData?.isAdmin ? "true" : "false"}
              onChange={handleChange}
            />
            </div>

            <button type="submit">Update</button>
          </form>
        </div>
      )}
    </div>
  );
}
