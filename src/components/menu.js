import '../styles/menu.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';


function Menu() {

    return (
        <div className="nav-menu" id="nav-menu">
            <ul>
                <BrowserRouter>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='work'>Work</Link></li>
                    <li><Link to='resume'>Resume</Link></li>
                    <li><Link to='contact'>Contact</Link></li>


                    {/* <Route exact path='/' component={ } />
                    <Route path='/work' component={ } />
                    <Route path='/resume' component={ } />
                    <Route path='contact' component={ } /> */}
                </BrowserRouter>
            </ul>
        </div>

    );
}

export default Menu;














