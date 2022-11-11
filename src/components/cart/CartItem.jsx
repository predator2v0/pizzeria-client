// import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Veg, Nonveg } from "../orderpizza/Pizza";
import { removeItemFromCart } from "../../redux/cart/cartActions";
// import "./Cart.css";
export default function CartItem(props) {
    const { id, type, name, price, description, ingredients, topping, image } =
        props.cItem;
    const cartDispatch = useDispatch();
    return (
        <div className='cart-item' id={id}>
            <div className='cart-item-image col-md-3'>
                <img src={image} alt='' width='100px' height='100px' />
                <div className="type-indicator">{type === "veg" ? <Veg /> : <Nonveg />}</div>
            </div>
            <div className='cart-item-details col-md-5'>
                <h3>{name}</h3>
                <p>
                    <i className='fa fa-inr'> </i>{" "}
                    {price}
                </p>
                <p>
                    <strong>Description: </strong>
                    {description}
                </p>
            </div>
            <div className='cart-item-operation col-md-4'>
                {/* <div className='d-flex'>
                    <button className='btn btn-secondary btn-sm' id='decBtn'>
                        {" "}
                        -{" "}
                    </button>
                    <p className='qty-text'>{0}</p>
                    <button className='btn btn-secondary btn-sm'> + </button>
                </div> */}
                <div className="p-1">
                    <p className="cart-pizza-info"><strong>ingredients: </strong>{ingredients.join(",")}</p>
                    <p className="cart-pizza-info"><strong>toppings: </strong>{topping.join(",")}</p>
                    
                </div>
                <button
                    className='btn btn-warning btn-sm mt-2'
                    onClick={() =>
                        cartDispatch(removeItemFromCart(props.cItem))
                    }
                >
                    remove
                </button>
            </div>
        </div>
    );
}
