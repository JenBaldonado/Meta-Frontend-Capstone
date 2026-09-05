import "../styles/menu.css";
import { useEffect, useState } from "react";
import DishCard from "../components/DishCard";
import DishModal from "../components/DishModal";
import { menuItems } from "../data/dishes";

function Menu() {
  const [selectedDish, setSelectedDish] = useState(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (selectedDish) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedDish]);

  return (
    <main className="menu-page">
      <section className="menu-hero">
        <div className="menu-container">
          <h1>Our Menu</h1>
          <p>
            Discover our Mediterranean-inspired dishes made with fresh,
            high-quality ingredients.
          </p>
        </div>
      </section>

      <section className="menu-section">
        <div className="menu-container">
          <h2>Featured Dishes</h2>
          <div className="menu-grid">
           
              {menuItems.map((dish) => (
                <DishCard
                  key={dish.id}
                  dish={dish}
                  onViewDish={setSelectedDish}
                />
              ))}
            

            {selectedDish && (
              <DishModal
                dish={selectedDish}
                onClose={() => setSelectedDish(null)}
              />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Menu;
