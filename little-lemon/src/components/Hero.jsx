import "../styles/hero.css";
import { Link } from "react-router";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Little Lemon</h1>

          <h2>Chicago</h2>

          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist. Come enjoy the taste
            of the Mediterranean in the heart of Chicago.
          </p>

          <Link to="/reservations" className="button">
            Reserve a Table
          </Link>
        </div>

        <div className="hero-images">
          <img
            src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=800&q=80"
            alt="Mediterranean restaurant food"
          />

          <img
            src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=80"
            alt="Mediterranean salad"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
