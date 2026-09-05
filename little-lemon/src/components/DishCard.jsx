function DishCard({ dish, onViewDish }) {
  return (
    <article className="menu-card">
      <img src={dish.image} alt={dish.name} />

      <div className="menu-card-content">
        <div className="menu-card-header">
          <h3>{dish.name}</h3>
          <span>{dish.price}</span>
        </div>

        <p>{dish.description}</p>

        <button className="dish-card_btn" onClick={() => onViewDish(dish)}>
          View Dish
        </button>
      </div>
    </article>
  );
}

export default DishCard;
