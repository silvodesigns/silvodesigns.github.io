import '../styles/menu.css';
import { Link } from 'react-router-dom';


function Menu() {

    const toggleMenu = event => {
        const target = document.getElementById("nav-menu");
        target.classList.toggle("open");

    };



    return (
        <div className="nav-menu" id="nav-menu">
            <div onClick={toggleMenu} id="close">
                <span id="x">X</span>
            </div>
            <ul>
                <li> <Link to='/'>Home</Link></li>
                <li> <Link to='work'>Work</Link></li>
                <li> <Link to='resume'>Resume</Link></li>
                <li> <Link to='contact'>Contact</Link></li>

            </ul>
        </div>

    );
}

export default Menu;














