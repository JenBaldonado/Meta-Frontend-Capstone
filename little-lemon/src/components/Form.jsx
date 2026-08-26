import { useState } from "react";

const initialFormData = {
  date: "",
  time: "",
  guests: "2",
  occasion: "",
  name: "",
  email: "",
  phone: "",
};

const availableTimes = [];

function Form({onSubmit}) {
  const [formData, setFormData] = useState(initialFormData);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(formData);
  }

  return (
    <>

      <form className="reservation-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
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
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
            <div className="form-group">
              <label htmlFor="res-date">Choose date</label>
              <input
                type="date"
                id="res-date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
             <div className="form-group">
                <label htmlFor="res-time">Choose time</label>
                <select
                  id="res-time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choose a time</option>
                  <option value="17:00">17:00</option>
                  <option value="18:00">18:00</option>
                  <option value="19:00">19:00</option>
                  <option value="20:00">20:00</option>
                  <option value="21:00">21:00</option>
                  <option value="22:00">22:00</option>
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
            />
      </form>
    </>
  );
}

export default Form;

