import '../styles/header.css';
import logo from '../logo22.svg';

function Header() {

    const toggleMenu = event => {
        const target = document.getElementById("nav-menu");
        target.classList.toggle("open");
    };

    return (
        <div className="header">
            <header className="App-header">
                <img src={logo} className="logo" alt="logo" />
                <p className="menu-btm" onClick={toggleMenu}>menu</p>
            </header>
        </div >
    );
}

export default Header;
