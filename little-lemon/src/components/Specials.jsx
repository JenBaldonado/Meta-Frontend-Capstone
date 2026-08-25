function Specials(){
    return (
         <section className="specials">

            <div className="section-container">

                <div className="section-heading">
                    <h2>This Week's Specials</h2>

                    <a href="#" className="menu-button">
                        Online Menu
                    </a>
                </div>


                <div className="specials-grid">

                    <article className="food-card">

                        <img
                            src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80"
                            alt="Greek salad"
                        />

                        <div className="card-content">

                            <div className="card-title">
                                <h3>Greek Salad</h3>
                                <span>$12.99</span>
                            </div>

                            <p>
                                Fresh lettuce, peppers, olives and
                                authentic Greek ingredients served
                                with our house dressing.
                            </p>

                            <a href="#">Order a delivery ›</a>

                        </div>

                    </article>


                    <article className="food-card">

                        <img
                            src="https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=600&q=80"
                            alt="Bruschetta"
                        />

                        <div className="card-content">

                            <div className="card-title">
                                <h3>Bruschetta</h3>
                                <span>$5.99</span>
                            </div>

                            <p>
                                Our Bruschetta is made from grilled
                                bread topped with fresh tomatoes,
                                herbs and olive oil.
                            </p>

                            <a href="#">Order a delivery ›</a>

                        </div>

                    </article>


                    <article className="food-card">

                        <img
                            src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80"
                            alt="Lemon dessert"
                        />

                        <div className="card-content">

                            <div className="card-title">
                                <h3>Lemon Dessert</h3>
                                <span>$5.00</span>
                            </div>

                            <p>
                                A delicious traditional dessert
                                made with fresh lemon and a
                                creamy filling.
                            </p>

                            <a href="#">Order a delivery ›</a>

                        </div>

                    </article>

                </div>

            </div>

        </section>

    )
}

export default Specials;