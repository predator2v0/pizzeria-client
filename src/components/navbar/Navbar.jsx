import { Link } from "react-router-dom";
import { toggleLoginMenu } from "../../utils/navbar/navUtil";
import './navbar.scss'
import userIcon from '../../assets/images/user.svg'
const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-md rounded text-white'>
            <div>
                <Link to='/' className='navbar-brand'>
                    <h2>Pizzeria</h2>
                </Link>
            </div>
            <div className="ml-auto">
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <Link to='/order' className='nav-link'>
                            Order Pizza
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/build' className='nav-link'>
                            Build Ur Pizza
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="#">
                            <img src={userIcon} alt="user icon" className="user-icon" id="userLoginIcon" onClick={toggleLoginMenu} />
                        </Link>
                        <NavLoginMenu />
                    </li>
                </ul>
            </div>
        </nav>
    );
}

const NavLoginMenu = () => {
    return (
        <div className="nav-login-menu-container" id="navLoginMenuContainer">
            <ul className="nav-login-menu">
                <li className="nav-item">
                    <Link to='/login' className="nav-link" onClick={toggleLoginMenu}>Log In</Link>
                </li>
                <li className="nav-item">
                    <Link to='/register' className="nav-link" onClick={toggleLoginMenu}>Register</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;