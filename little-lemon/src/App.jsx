import './App.css';
import { Routes, Route } from "react-router";

import Nav from './components/Nav';
import Footer from './components/Footer';

import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Reservations from "./pages/Reservations";
import Login from "./pages/Login";


function App() {
  return (
    <div className="App">
      <Nav/>
      <main>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/login" element={<Login />} />
          </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
