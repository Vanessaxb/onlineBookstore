import styles from "./MenuList.module.css";
import MenuListItem from "../MenuListItem/MenuListItem";
import { Link, useNavigate } from "react-router-dom";
import { remove } from "../../utilities/items-api";
import { toast } from "react-toastify";

export default function MenuList({ menuItems, handleAddToOrder, user }) {
  const navigate = useNavigate();

  const handleDelete = async (item) => {
    try {
      console.log(item);
      await remove(item);
      toast.success("Book Deleted Successfuly!", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      navigate("/new");
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const items = menuItems.map((item) => (
    <div key={item._id} className={`${styles["menu-item"]} menu-item`}>
      <MenuListItem handleAddToOrder={handleAddToOrder} menuItem={item} />
      <div className="adminButtons">
        {user.isAdmin && (
          <Link
            to={`/items/${item._id}/update`}
            item={item}
            className="btn-sma"
          >
            Update Book
          </Link>
        )}

        {user.isAdmin && (
          <Link
            to=""
            onClick={() => handleDelete(item._id)}
            item={item}
            className="btn-sma"
          >
            Delete Book
          </Link>
        )}
      </div>
    </div>
  ));

  return <main className={styles.MenuList}>{items}</main>;
}
