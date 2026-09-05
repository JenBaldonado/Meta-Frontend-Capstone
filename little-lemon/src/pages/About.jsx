

import "../styles/about.css";

function About() {
  return (
    <main className="about-page">

      <section className="about-hero">
        <div className="about-container about-hero-layout">

          <div className="about-hero-content">
            <span className="section-label">Our Story</span>

            <h1>Saffron &amp; Ember</h1>

            <h2>Chicago</h2>

            <p>
              Saffron &amp; Ember is a family-owned Mediterranean restaurant
              inspired by traditional recipes, fresh ingredients, and
              the joy of sharing good food with good company.
            </p>
          </div>

          <div className="about-hero-images">
            <img
              src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=900&q=80"
              alt="Saffron & Ember restaurant interior"
            />

            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=700&q=80"
              alt="Restaurant dining area"
            />
          </div>

        </div>
      </section>


      <section className="about-story">
        <div className="about-container story-layout">

          <div className="story-content">
            <span className="section-label">How It Started</span>

            <h2>A little restaurant with a big love for food</h2>

            <p>
              Saffron &amp; Ember began with a simple idea: create a welcoming
              neighborhood restaurant where people could enjoy authentic
              Mediterranean flavors in a relaxed and modern setting.
            </p>

            <p>
              Our menu combines recipes passed down through generations
              with contemporary techniques. We focus on fresh vegetables,
              quality ingredients, bright flavors, and dishes made with care.
            </p>

            <p>
              Whether you're joining us for a quick lunch, a family dinner,
              or a special celebration, we want every visit to feel warm,
              memorable, and delicious.
            </p>
          </div>

          <div className="story-image">
            <img
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80"
              alt="Saffron & Ember dining room"
            />
          </div>

        </div>
      </section>


      <section className="about-values">
        <div className="about-container">

          <div className="values-heading">
            <span className="section-label">What Matters To Us</span>
            <h2>Our Values</h2>
          </div>

          <div className="values-grid">

            <article className="value-card">
              <div className="value-icon">01</div>

              <h3>Fresh Ingredients</h3>

              <p>
                We believe great food begins with fresh, carefully selected
                ingredients.
              </p>
            </article>


            <article className="value-card">
              <div className="value-icon">02</div>

              <h3>Family Tradition</h3>

              <p>
                Our dishes are inspired by recipes and traditions shared
                across generations.
              </p>
            </article>


            <article className="value-card">
              <div className="value-icon">03</div>

              <h3>Warm Hospitality</h3>

              <p>
                We want every guest to feel welcome from the moment they
                enter our restaurant.
              </p>
            </article>

          </div>

        </div>
      </section>


      <section className="about-team">
        <div className="about-container team-layout">

          <div className="team-image">
            <img
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=900&q=80"
              alt="Saffron & Ember chef preparing food"
            />
          </div>

          <div className="team-content">
            <span className="section-label">Our Kitchen</span>

            <h2>Made with care</h2>

            <p>
              Behind every dish is a team passionate about food,
              hospitality, and creating experiences worth coming back for.
            </p>

            <p>
              Our kitchen respects traditional Mediterranean cooking while
              embracing new ideas, seasonal ingredients, and modern
              presentation.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}

export default About;