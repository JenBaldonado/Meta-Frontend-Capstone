import './App.css';
import { Routes, Route, useNavigate } from "react-router";

import Nav from './components/Nav';
import Footer from './components/Footer';

import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Reservations from "./pages/BookingPage";
import Login from "./pages/Login";
import ConfirmedBooking from "./components/ConfirmedBooking";

function App() {
  const navigate = useNavigate();

  function submitForm(formData) {
    const isSubmitted = typeof submitAPI === "function" ? submitAPI(formData) : true;

    if (isSubmitted) {
      navigate('/confirmed', { state: formData });
    }
  }

  return (
    <div className="App">
      <Nav/>
      <main>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reservations" element={<Reservations submitForm={submitForm} />} />
            <Route path="/confirmed" element={<ConfirmedBooking />} />
            <Route path="/login" element={<Login />} />
          </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
