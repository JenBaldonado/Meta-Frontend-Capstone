function AboutSnippet() {
    return(
         <section className="about">

            <div className="section-container about-container">

                <div className="about-content">

                    <h2>About</h2>

                    <p>
                        Little Lemon is a family-owned restaurant.
                        We love sharing delicious Mediterranean food
                        with our guests.
                    </p>

                    <p>
                        Our menu combines traditional recipes with
                        modern techniques and fresh ingredients.
                        Everything is prepared with care in our
                        Chicago kitchen.
                    </p>

                </div>


                <div className="about-images">

                    <img
                        src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=600&q=80"
                        alt="Little Lemon restaurant interior"
                    />

                    <img
                        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80"
                        alt="Restaurant dining area"
                    />

                </div>

            </div>

        </section>

    )
}

export default AboutSnippet;
