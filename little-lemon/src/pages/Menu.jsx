import "../styles/menu.css";

function Menu() {
  const menuItems = [
    {
      name: "Greek Salad",
      description:
        "Fresh lettuce, peppers, olives and authentic Greek ingredients.",
      price: "$12.99",
      image:
        "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Bruschetta",
      description:
        "Grilled bread topped with fresh tomatoes, herbs and olive oil.",
      price: "$8.99",
      image:
        "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Grilled Fish",
      description:
        "Freshly grilled fish served with seasonal vegetables.",
      price: "$19.99",
      image:
        "https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Pasta Primavera",
      description:
        "Fresh pasta with seasonal vegetables and a rich tomato sauce.",
      price: "$15.99",
      image:
        "https://images.unsplash.com/photo-1556761223-4c4282c73f77?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Lemon Dessert",
      description:
        "A sweet and creamy dessert made with fresh lemon.",
      price: "$7.99",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Chocolate Cake",
      description:
        "Rich chocolate cake served with a smooth cream filling.",
      price: "$8.99",
      image:
        "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=800&q=80",
    },
  ];

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
            {menuItems.map((item) => (
              <article className="menu-card" key={item.name}>
                <img src={item.image} alt={item.name} />

                <div className="menu-card-content">
                  <div className="menu-card-header">
                    <h3>{item.name}</h3>
                    <span>{item.price}</span>
                  </div>

                  <p>{item.description}</p>

                  <button>Order Now</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Menu;