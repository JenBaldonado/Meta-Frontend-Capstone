import { useMemo, useState } from "react";

export function validateName(name) {
  return String(name || "").trim().length >= 2;
}

export function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || ""));
}

export function validatePhone(phone) {
  return String(phone || "").replace(/\D/g, "").length >= 7;
}

export function validateGuests(guests) {
  const value = Number(guests);
  return Number.isFinite(value) && value >= 1 && value <= 10;
}

export function validateFormData(formData) {
  return (
    validateName(formData.name) &&
    validateEmail(formData.email) &&
    validatePhone(formData.phone) &&
    Boolean(formData.date) &&
    Boolean(formData.time) &&
    validateGuests(formData.guests) &&
    Boolean(formData.occasion)
  );
}

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  const isFormValid = useMemo(() => validateFormData(formData), [formData]);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));

    if (name === "date") {
      setBookingDate(value);
      dispatch({
        type: "DATE_CHANGED",
        date: value,
      });
    }

    if (name === "time") {
      setBookingTime(value);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!isFormValid) {
      return;
    }

    if (typeof submitForm === "function") {
      submitForm(formData);
    }
  }

  return (
    <>
      <form className="reservation-form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            minLength="2"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+1 555 123 4567"
            value={formData.phone}
            pattern="[0-9+()\-\s]{7,}"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="res-date">Choose date</label>
            <input
              type="date"
              id="res-date"
              name="date"
              value={bookingDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="res-time">Choose time</label>
            <select
              id="res-time"
              name="time"
              value={bookingTime}
              onChange={handleChange}
              required
            >
              <option value="">Select a time</option>
              {(availableTimes || []).map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
              required
            >
              <option value="">Select occasion</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Engagement">Engagement</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <input
          type="submit"
          value="Make Your reservation"
          className="reservation-button"
          disabled={!isFormValid}
        />
      </form>
    </>
  );
}

export default BookingForm;
