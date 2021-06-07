import '../styles/menu.css';
import { Link } from 'react-router-dom';


function Menu() {


    const toggleMenu = event => {
        const target = document.getElementById("nav-menu");
        target.classList.toggle("open");
    };


    return (
        <div className="nav-menu" id="nav-menu">
            <ul>

                <li onClick={toggleMenu}> <Link to='/'>Home</Link></li>
                <li onClick={toggleMenu}> <Link to='work'>Work</Link></li>
                <li onClick={toggleMenu}> <Link to='resume'>Resume</Link></li>
                <li onClick={toggleMenu}> <Link to='contact'>Contact</Link></li>

            </ul>
        </div>

    );
}

export default Menu;














