import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./Cart.css";
import CartItem from "./CartItem";
import { clearCart } from "../../redux/cart/cartActions";

export default function Cart() {
    const { items, total, status } = useSelector((cart) => cart.cartReducer);
    const user = useSelector((user) => user.userReducer);
    const clearCartDispatch = useDispatch();
    const navigate = useNavigate();
    const amount = total + total * 0.05;
    const [deliveryAddress, setDeliveryAddress] = useState("");
    const [contactNo, setContactNo] = useState("");
    const placeOrder = async () => {
        try {
            const orderplaced = await axios.post(
                `http://localhost:4567/order/${user}`,
                { items, amount, status, deliveryAddress, contactNo },
                {
                    "Content-Type": "application/json",
                }
            );
            if (orderplaced) {
                window.alert(orderplaced.data.msg);
                clearCartDispatch(clearCart());
                navigate("/dashboard");
            }
        } catch (error) {
            window.alert(error.response.data.msg);
        }
    };
    return (
        <div className='container'>
            <p>currently there are {items.length} items in the cart</p>
            <div className='d-flex cart'>
                <div className='cart-item-container'>
                    {items.map((cItem) => (
                        <CartItem key={cItem.id} cItem={cItem} />
                    ))}
                </div>
                <div className='cart-op'>
                    <div className='del-address'>
                        <textarea
                            name=''
                            id=''
                            className='address border'
                            placeholder='delivery address'
                            onChange={(e) => setDeliveryAddress(e.target.value)}
                        ></textarea>
                        <input
                            type='tel'
                            name='contact no'
                            className='cno border'
                            placeholder='contact number'
                            onChange={(e) => setContactNo(e.target.value)}
                        />
                    </div>
                    <div className='cart-total'>
                        {total === 50 ? (
                            " "
                        ) : (
                            <div>
                                <h6>Total: {total}</h6>
                                <h6>Tax(5%): {total * 0.05}</h6>
                                <br />

                                <h4>Amount: ₹ {amount}</h4>
                            </div>
                        )}
                        <button
                            className='btn btn-warning'
                            onClick={placeOrder}
                        >
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
