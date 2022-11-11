import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../redux/user/userActions";

import logo from "../../PizzeriaLogo.png";

export default function Navbar() {
    const logoDimensions = {
        width: "45px",
        height: "40px",
    };
    const cartCount = useSelector((cart) => cart.cartReducer.items.length);
    const userLoggedIn = useSelector((user) => user.userReducer);
    const logoutDispatch = useDispatch();
    const logout = () => {
        logoutDispatch(logoutAction());
    };
    return (
        <nav className='navbar navbar-dark bg-dark navbar-expand-md rounded text-white container'>
            <div>
                <Link to='/' className='navbar-brand h1'>
                    Pizzeria
                </Link>
                <img src={logo} alt='Pizzeria Logo' style={logoDimensions} />
            </div>

            <div>
                {
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
                    </ul>
                }
            </div>
            <div className='ml-auto '>
                <ul className='navbar-nav'>
                    {userLoggedIn && (
                        <li className='nav-item mr-2'>
                            <Link to='/dashboard'>
                                <button className='btn btn-md btn-warning text-white'>
                                    <i className='fas fa-user'></i> dashboard
                                </button>
                            </Link>
                        </li>
                    )}
                    {userLoggedIn && (
                        <li className='nav-item mr-2'>
                            <Link to='/cart'>
                                <button className='btn btn-md btn-warning text-white'>
                                    <i className='fas fa-shopping-cart'></i>{" "}
                                    cart{" "}
                                    {cartCount === 0 ? (
                                        " "
                                    ) : (
                                        <CartCount cartItemCount={cartCount} />
                                    )}
                                </button>
                            </Link>
                        </li>
                    )}
                    {!userLoggedIn && (
                        <li className='nav-item mr-2'>
                            <Link to='/register'>
                                <button className='btn btn-md btn-warning text-white'>
                                    <i className='fa fa-user-plus'></i> register
                                </button>
                            </Link>
                        </li>
                    )}
                    {!userLoggedIn ? (
                        <li className='nav-item'>
                            <Link to='/login'>
                                <button className='btn btn-md btn-warning text-white'>
                                    <i className='fa fa-sign-in'></i> login
                                </button>
                            </Link>
                        </li>
                    ) : (
                        <li className='nav-item'>
                            <Link to='/'>
                                <button
                                    className='btn btn-md btn-warning text-white'
                                    onClick={logout}
                                >
                                    {" "}
                                    <i className='fa fa-sign-out'></i> logout
                                </button>
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export function CartCount({ cartItemCount }) {
    return <span className='badge badge-light'>{cartItemCount}</span>;
}
