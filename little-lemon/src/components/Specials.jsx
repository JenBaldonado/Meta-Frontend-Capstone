function Specials(){
    return (
         <section class="specials">

            <div class="section-container">

                <div class="section-heading">
                    <h2>This Week's Specials</h2>

                    <a href="#" class="menu-button">
                        Online Menu
                    </a>
                </div>


                <div class="specials-grid">

                    <article class="food-card">

                        <img
                            src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80"
                            alt="Greek salad"
                        />

                        <div class="card-content">

                            <div class="card-title">
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


                    <article class="food-card">

                        <img
                            src="https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=600&q=80"
                            alt="Bruschetta"
                        />

                        <div class="card-content">

                            <div class="card-title">
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


                    <article class="food-card">

                        <img
                            src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80"
                            alt="Lemon dessert"
                        />

                        <div class="card-content">

                            <div class="card-title">
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