import { useState } from "react";
import "../styles/reservations.css";
import Form from "../components/Form";

function Reservations() {
  const [reservation, setReservation] = useState(null);

    function handleReservation(formData) {
        console.log("Reservation:", formData);
        // You could send formData to an API here.
        setReservation(formData);
    }

  return (
    <main className="reservation-page">
      {/* HERO */}
      <section className="reservation-hero">
        <div className="reservation-container">
          <h1>Reserve a Table</h1>

          <p>
            Join us at Little Lemon and enjoy fresh Mediterranean dishes in the
            heart of Chicago.
          </p>
        </div>
      </section>

      {/* RESERVATION FORM */}
      <section className="reservation-section">
        <div className="reservation-container reservation-layout">
          <div className="reservation-info">
            <span className="section-label">Reservations</span>

            <h2>Book your table</h2>

            <p>
              Choose your preferred date, time, and party size. We'll take care
              of the rest.
            </p>

            <div className="restaurant-details">
              <div>
                <h3>Opening Hours</h3>
                <p>Monday – Friday</p>
                <strong>11:00 AM – 10:00 PM</strong>
              </div>

              <div>
                <p>Saturday – Sunday</p>
                <strong>10:00 AM – 11:00 PM</strong>
              </div>

              <div>
                <h3>Location</h3>
                <p>123 Lemon Street</p>
                <p>Chicago, IL</p>
              </div>
            </div>
          </div>

          <div className="reservation-form-container">
             {reservation ? (<div className="reservation-success">
                <div className="success-icon">✓</div>

                <h2>Reservation received!</h2>

                <p>
                  Thank you, {reservation.name}. Your table for {reservation.guests}{" "}
                  guests has been requested for {reservation.date} at{" "}
                  {reservation.time}.
                </p>

                <button onClick={() => setSubmitted(false)}>
                  Make Another Reservation
                </button>
              </div> ) : (<Form onSubmit={handleReservation} />)}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Reservations;
