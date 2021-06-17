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
                <div className="logo-container">  <img src={logo} className="logo" alt="logo" /></div>
                <nav>
                    <ul>
                        <li id="menu-item"><div className="blue-icon"></div>home</li>
                        <li id="menu-item"><div className="blue-icon"></div>work</li>
                        <li id="menu-item"><div className="blue-icon"></div>experiences</li>
                        <li id="menu-item"><div className="blue-icon"></div>about</li>
                        <li id="menu-item"><div className="blue-icon"></div>resume</li>
                    </ul>
                </nav>

                {/* <p className="menu-btm" onClick={toggleMenu}>menu</p> */}
            </header>
        </div >
    );
}

export default Header;
