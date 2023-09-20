// import LineItem from '../components/LineItem/LineItem';
import {create} from '../utilities/items-api'
import * as categoryApi from '../utilities/category-api'
import { useState, useEffect } from 'react';

export default function CreateBookForm({setUser}) {
    const [bookFormData, setBookFormData] = useState({
      title: "",
      image: "",
      author: "",
      category: "",
      description: "",
      price: "",
    });

    const [categories, setCategories] = useState(null)

    useEffect(() => {
      const fetchData = async () => {
        const data = await categoryApi.index()
        console.log(data);
        setCategories(data)

      }  
      fetchData()    
    }, [])
      
    const handleChange = (e) => {
      setBookFormData({
          ...bookFormData,
          [e.target.name]: e.target.value,
          
      });
    };

    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {              
             
          //calling user service signup function
          const item = await create(bookFormData)
          console.log('Item', item);
          
    
          console.log(bookFormData);
    
        } catch (error) {
          console.log(error);
          }
      };

    return (
        <div>
          <div className="bookForm-container">
            <form autoComplete="off" onSubmit={handleSubmit}>
              <label>Title</label>
              <input type="text" name="title" value={bookFormData.title} onChange={handleChange} required/>
    
              <label>Image</label>
              <input type="text" name="image" value={bookFormData.image} onChange={handleChange} required />
    
              <label>Author</label>
              <input type="text" name="author" value={bookFormData.author} onChange={handleChange} required />

              <label>Category</label>
              <select name="category" onChange={handleChange}>
                {categories && categories.map(cat => <option value={cat._id} key={cat._id}>{cat.name}</option>)}
              </select>             
                           
    
              <label>Description</label>
              <input type="text" name="description" value={bookFormData.description} onChange={handleChange} required />

              <label>Price</label>
              <input type="number" name="price" value={bookFormData.price} onChange={handleChange} required />
    
              <button type="submit">Create</button>
            </form>
          </div>
          <p className="error-message">{bookFormData.error}</p> 
        </div>
      );
}