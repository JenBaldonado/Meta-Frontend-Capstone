import { Link, useLocation } from "react-router";

function ConfirmedBooking() {
  const location = useLocation();
  const booking = location.state || {};

  return (
    <main className="reservation-page">
      <section className="reservation-section confirmation-section">
        <div className="reservation-container confirmation-container">
          <div className="reservation-success confirmation-card">
            <div className="success-icon" aria-label="Confirmed booking icon">
              ✓
            </div>

            <span className="section-label">Reservation confirmed</span>
            <h1>Table reserved successfully</h1>

            <p>
              Thank you, <strong>{booking.name || "guest"}</strong>. We’re looking forward to welcoming you for a wonderful dining experience.
            </p>

            <div className="success-summary">
              <div>
                <span>Date</span>
                <strong>{booking.date || "Your selected date"}</strong>
              </div>
              <div>
                <span>Time</span>
                <strong>{booking.time || "Your selected time"}</strong>
              </div>
              <div>
                <span>Guests</span>
                <strong>{booking.guests || 0}</strong>
              </div>
              <div>
                <span>Occasion</span>
                <strong>{booking.occasion || "Celebration"}</strong>
              </div>
            </div>

            <div className="confirmation-actions">
              <Link to="/reservations" className="reservation-button confirmation-button">
                Book another table
              </Link>
              <Link to="/" className="secondary-button">
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ConfirmedBooking;
