import "../styles/nav.css";

function Nav() {
  return (
    <div class="header-container">
      <a href="#" class="logo">
        <div class="logo-circle">LL</div>
        <span>Little Lemon</span>
      </a>

      <nav class="navigation">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Menu</a>
        <a href="#">Reservations</a>
        <a href="#">Login</a>
      </nav>
    </div>
  );
}

export default Nav;
