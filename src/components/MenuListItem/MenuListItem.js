import styles from "./MenuListItem.module.css";

export default function MenuListItem({ menuItem, handleAddToOrder }) {
  return (
    <div className={styles.MenuListItem}>
      <img src={menuItem.image} width="100px"></img>
      <div className={styles.name}>{menuItem.title}</div>
      <div className={styles.name}>Author: {menuItem.author}</div>
      <div className={styles.buy}>
        <span>${menuItem.price.toFixed(2)}</span>
        <button
          className="btn-sm"
          onClick={() => handleAddToOrder(menuItem._id)}
        >
          ADD
        </button>
      </div>
      
    </div>
  );
}
