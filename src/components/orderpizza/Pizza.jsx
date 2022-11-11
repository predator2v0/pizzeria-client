import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cart/cartActions";

import "./Pizza.css";

export function Veg() {
    return <div className="type-veg"></div>;
}

export function Nonveg() {
    return <div className="type-nonveg"></div>;
}
function Pizza(props) {
    const cartDispatch = useDispatch();
    const ingredients = props.pizza.ingredients.join(", ");
    const toppings = props.pizza.topping.join(", ");
    return (
        <div className="pizza-container">
            <div className="row">
                <div className="col-2 inner-start-container">
                    <p>
                        <strong>{props.pizza.name}</strong>
                    </p>

                    {props.pizza.type === "veg" ? <Veg /> : <Nonveg />}

                    <p>
                        {" "}
                        <i className="fa fa-inr"></i>{" "}
                        <strong>{props.pizza.price}</strong>
                    </p>
                </div>
                <div className="col-7 inner-middle-container">
                    <p>{props.pizza.description}</p>
                    <p>
                        <strong>Ingredients:</strong> {ingredients}
                    </p>
                    <p>
                        <strong>Toppings:</strong> {toppings}
                    </p>
                </div>
                <div className="col-3 inner-end-container">
                    <img
                        src={props.pizza.image}
                        alt={props.pizza.name}
                        width="90%"
                        height="33%"
                        className="img-responsive"
                    />
                    <button
                        className="btn btn-warning text-white btn-sm mt-2"
                        onClick={() => cartDispatch(addItemToCart({...props.pizza, quantity: 1}))}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Pizza;


