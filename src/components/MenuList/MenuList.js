import styles from './MenuList.module.css';
import MenuListItem from '../MenuListItem/MenuListItem';
import { Link, useNavigate } from 'react-router-dom';
import {remove} from '../../utilities/items-api'




export default function MenuList({ menuItems, handleAddToOrder, user }) {
  
  const navigate = useNavigate()


  const handleDelete = async (item) => {
    try {
      console.log(item);
      await remove(item);
      navigate("/new") //! make it to go to another refresh page
  // !can I send message "Booke deleted successfully!"?
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };  
  
  const items = menuItems.map(item => (
    <div key={item._id}>
    <MenuListItem      
      handleAddToOrder={handleAddToOrder}
      menuItem={item}
      />
      {/* {user.isAdmin && 
      <Link to={`/items/${item._id}/update`} item={item} className="button btn-sm">Create Book</Link>} */}

      {user.isAdmin && 
      <Link to={`/items/${item._id}/update`} item={item} className="button btn-sm">Update Book</Link>}
      
      {user.isAdmin && 
      <Link to="" onClick={ () => handleDelete(item._id)} item={item} className="button btn-sm">Delete Book</Link>}
      
      </div>
      ));

  return (
    <main className={styles.MenuList}>
      {items}
    </main>
  );
}