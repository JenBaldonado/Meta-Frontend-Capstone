import "../styles/hero.css";
import { useState } from 'react'
import Form from "./Form"

function Hero() {
    const [reservation, setReservation] = useState(null);
    
        function handleReservation(formData) {
            console.log("Reservation:", formData);
            // You could send formData to an API here.
            setReservation(formData);
        }

    const [modal, setModal] = useState(false);

    function openModal() {
        setModal(true)
    }

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

                    {modal ? (<div id="modal" className="modal">
                        <div className="innerModal">
                            <div className="overlay"></div>
                        <Form onSubmit={handleReservation}/>
                        </div>
                        
                    </div>) :
                     (<a href="#" className="button" onClick={openModal}>
                        Reserve a Table
                    </a>)}

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
