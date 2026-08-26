import "../styles/hero.css";
import { useEffect, useState } from 'react'
import { Link } from "react-router";
import Form from "./Form"

function Hero() {
    const [reservation, setReservation] = useState(() => {
        const savedReservation = localStorage.getItem("reservation");
        return savedReservation ? JSON.parse(savedReservation) : null;
    });
    
        function handleReservation(formData) {
            console.log("Reservation:", formData);
            localStorage.setItem("reservation", JSON.stringify(formData));
            setReservation(formData);
        }

    const [modal, setModal] = useState(false);

    function openModal() {
        setModal(true)
    }

    function closeModal(event) {
        if (event.target === event.currentTarget) {
            setModal(false)
        }
    }

    useEffect(() => {
        if (!modal) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [modal]);

  return (
    <section className="hero">
            <div className="hero-container">

                <div className="hero-content">

                    <h1>Little Lemon</h1>

                    <h2>Chicago</h2>

                    <p>
                        We are a family owned Mediterranean restaurant,
                        focused on traditional recipes served with a modern
                        twist. Come enjoy the taste of the Mediterranean
                        in the heart of Chicago.
                    </p>

                    {modal ? (<div
                        id="modal"
                        className="modal"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Reserve a table"
                        onClick={closeModal}
                    >
                        <div className="innerModal">
                        {reservation ? (
                            <div className="reservation-success">
                                <h2>Reservation submitted!</h2>
                                <p>Your reservation details are ready to view.</p>
                                <Link
                                    to="/reservations"
                                    className="button"
                                    onClick={() => setModal(false)}
                                >
                                    View Reservation
                                </Link>
                            </div>
                        ) : (
                            <Form onSubmit={handleReservation}/>
                        )}
                        </div>
                        
                    </div>) :
                     (<button type="button" className="button" onClick={openModal}>
                        Reserve a Table
                    </button>)}

                </div>

                <div className="hero-images">
                    <img src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=800&q=80" alt="Mediterranean restaurant food"/>

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
