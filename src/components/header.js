import '../styles/header.css';
import logo from '../logo22.svg';

function Header() {
    return (
        <div className="header">
            <header className="App-header">
                <img src={logo} className="logo" alt="logo" />
                <p className="menu-btm">menu</p>
            </header>
        </div >
    );
}

export default Header;
