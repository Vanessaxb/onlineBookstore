import { useState, useEffect } from "react";
import { update, getById } from "../utilities/items-api";
import * as categoryApi from "../utilities/category-api";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


export default function EditBookForm({ setUser }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bookFormData, setBookFormData] = useState(null);

  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      const bookData = await getById(id);
      console.log(bookData);
      setBookFormData(bookData);
    };
    fetchBook();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await categoryApi.index();
      setCategories(data);
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setBookFormData({
      ...bookFormData,
      [e.target.name]: e.target.value,
    });
  };
  console.log(bookFormData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Update the book data
      const updatedBook = await update(id, bookFormData);
      toast.success('Book Upated Successfuly!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      navigate("/orders/new");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {bookFormData && (
        <div className="bookForm-container">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <label>Title</label>
            <input
              type="text"
              name="title"
              defaultValue={bookFormData?.title}
              onChange={handleChange}
              required
            />

            <label>Image</label>
            <input
              type="text"
              name="image"
              defaultValue={bookFormData?.image}
              onChange={handleChange}
              required
            />

            <label>Author</label>
            <input
              type="text"
              name="author"
              defaultValue={bookFormData?.author}
              onChange={handleChange}
              required
            />

            <label>Category</label>
            <select name="category" onChange={handleChange}>
              {categories &&
                categories.map((cat) => (
                  <option value={cat._id} key={cat._id}>
                    {cat.name}
                  </option>
                ))}
            </select>

            <label>Description</label>
            <input
              type="text"
              name="description"
              defaultValue={bookFormData?.description}
              onChange={handleChange}
              required
            />

            <label>Price</label>
            <input
              type="number"
              name="price"
              defaultValue={bookFormData.price}
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
