import { useReducer } from "react";
import "../styles/reservations.css";
import Form from "../components/BookingForm";

export function initializeTimes() {
  const today = new Date().toISOString().split("T")[0];

  if (typeof fetchAPI === "function") {
    return fetchAPI(today);
  }

  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}

export function updateTimes(state, action) {
  switch (action.type) {
    case "DATE_CHANGED":
      if (typeof fetchAPI === "function") {
        return fetchAPI(action.date);
      }
      return state;
    default:
      return state;
  }
}

function Reservations({ submitForm }) {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    undefined,
    initializeTimes
  );

  return (
    <main className="reservation-page">
      <section className="reservation-hero">
        <div className="reservation-container">
          <h1>Reserve a Table</h1>

          <p>
            Join us at Saffron &amp; Ember and enjoy fresh Mediterranean dishes in the
            heart of Chicago.
          </p>
        </div>
      </section>

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
                <p>123 Saffron Avenue</p>
                <p>Chicago, IL</p>
              </div>
            </div>
          </div>

          <div className="reservation-form-container">
            <Form availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Reservations;
