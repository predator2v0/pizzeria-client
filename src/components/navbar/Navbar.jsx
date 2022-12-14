import { Link } from "react-router-dom";
import './navbar.scss'
import userIcon from '../../assets/images/user.svg'
const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-md rounded text-white'>
            <div className="container">
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
                            <Link to='/login' className='nav-link'>
                                <img src={userIcon} alt="user icon" className="user-icon"/>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export function CartCount({ cartItemCount }) {
    return <span className='badge badge-light'>{cartItemCount}</span>;
}


export default Navbar;