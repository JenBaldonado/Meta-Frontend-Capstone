function Footer() {
    return (
    <footer className="footer">

        <div className="footer-container">

            <div className="footer-brand">

                <div className="footer-logo">
                    <div className="logo-circle">SE</div>
                    <span>Saffron &amp; Ember</span>
                </div>

                <p>
                    Mediterranean food with a modern twist.
                </p>

            </div>


            <div className="footer-column">

                <h3>Discover More</h3>

                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Menu</a>
                <a href="#">Reservations</a>
                <a href="#">Login</a>

            </div>


            <div className="footer-column">

                <h3>Contact</h3>

                <p>123 Saffron Avenue</p>
                <p>Chicago, IL</p>
                <p>+1 555 123 4567</p>
                <p>hello@saffronandember.com</p>

            </div>


            <div className="footer-column">

                <h3>Get Social</h3>

                <a href="#">Instagram</a>
                <a href="#">Facebook</a>
                <a href="#">Twitter</a>

            </div>

        </div>

    </footer>

    )
}

export default Footer;