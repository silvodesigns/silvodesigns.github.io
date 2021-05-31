import '../styles/menu.css';


function Menu() {

    const toggleMenu = event => {
        const target = document.getElementById("nav-menu");
        target.classList.toggle("open");
    };



    return (
        <div className="nav-menu" id="nav-menu">
            <ul>
                <li>Home</li>
                <li>Work</li>
                <li>Resume</li>
                <li>Contact</li>
            </ul>
        </div>

    );
}

export default Menu;














