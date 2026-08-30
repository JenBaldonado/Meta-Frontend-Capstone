import { useState } from "react";
import { Link } from "react-router";
import "../styles/login.css";

function Login() {
    const [message, setMessage] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        setMessage("Thanks for your interest! Our login experience is coming soon, and we’ll be ready to welcome you back with a faster booking flow.");
    }

    return(
        <section className="login-page">
            <div className="login-container">
                <div className="login-intro">
                    <span className="login-eyebrow">Welcome back</span>
                    <h1>Your table is waiting.</h1>
                    <p>
                        Sign in to view upcoming reservations, save your favorite
                        dishes, and enjoy a faster booking experience.
                    </p>
                    <div className="login-highlight" aria-hidden="true">
                        <span>LL</span>
                        <p>Fresh Mediterranean food, made with love.</p>
                    </div>
                </div>

                <div className="login-card">
                    <div className="login-card-heading">
                        <h2>Sign in</h2>
                        <p>Enter your details to continue.</p>
                    </div>

                    <form className="login-form" onSubmit={handleSubmit}>
                        <div className="login-field">
                            <label htmlFor="login-email">Email address</label>
                            <input
                                id="login-email"
                                name="email"
                                type="email"
                                placeholder="you@example.com"
                                autoComplete="email"
                                required
                            />
                        </div>

                        <div className="login-field">
                            <div className="login-label-row">
                                <label htmlFor="login-password">Password</label>
                                <button className="login-text-button" type="button">
                                    Forgot password?
                                </button>
                            </div>
                            <input
                                id="login-password"
                                name="password"
                                type="password"
                                placeholder="Enter your password"
                                autoComplete="current-password"
                                required
                            />
                        </div>

                        <label className="login-remember">
                            <input type="checkbox" name="remember" />
                            <span>Keep me signed in</span>
                        </label>

                        <button className="login-submit" type="submit">
                            Sign in
                        </button>

                        {message && <p className="login-message" role="status">{message}</p>}
                    </form>

                    <p className="login-signup">
                        New to Little Lemon? <Link to="/reservations">Book as a guest</Link>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Login;
