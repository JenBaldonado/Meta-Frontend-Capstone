export default function DishModal({ dish, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose} role="presentation">
      <article
        className="dish-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dish-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="dish-modal__close"
          type="button"
          onClick={onClose}
          aria-label="Close dish details"
        >
          ×
        </button>

        <img src={dish.image} alt="" />

        <div className="dish-modal__content">
          <div className="dish-modal__heading">
            <h2 id="dish-modal-title">{dish.name}</h2>
            <span>{dish.price}</span>
          </div>

          <p style={{ marginBottom: "1rem" }}>{dish.description}</p>
          
          {dish.ingredients && (
            <>
              <h3>Ingredients</h3>
              <p>{dish.ingredients.join(", ")}</p>
            </>
          )}

          {dish.dietary && (
            <div className="dish-modal__tags">
              {dish.dietary.map((label) => (
                <span key={label}>{label}</span>
              ))}
            </div>
          )}

          <a className="button button--primary" href="/reservations">
            Reserve a Table
          </a>
        </div>
      </article>
    </div>
  );
}
