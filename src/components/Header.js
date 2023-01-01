import "../styles/header.css";
import logo from "../logo22.svg";
import { Link } from "react-router-dom";

function Header() {
  const toggleMenu = (event) => {
    const target = document.getElementById("nav-menu");
    target.classList.toggle("open");
  };

  return (
    <div className="header">
      <header className="App-header">
        <div className="logo-container">
          <img src={logo} className="logo" alt="logo" />
          <p onClick={toggleMenu} class="menu-btm">
            menu
          </p>
        </div>
        <nav>
          <ul>
            <li id="menu-item">
              <div className="blue-icon"></div> <Link to="/">home</Link>
            </li>
            <li id="menu-item">
              <div className="blue-icon"></div> <Link to="work">work</Link>
            </li>
            <li id="menu-item">
              <div className="blue-icon"></div> <Link to="/">experiences</Link>
            </li>
            <li id="menu-item">
              <div className="blue-icon"></div> <Link to="/">about</Link>
            </li>
            <li id="menu-item">
              <div className="blue-icon"></div> <Link to="/">resume</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
