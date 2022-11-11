import React, { useEffect, useState } from "react";
import axios from "axios";

import Pizza from "./Pizza";

const Order = () => {
    const [response, setResponse] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:4567/pizza")
            .then((res) => {
                setResponse(res.data);
            })
            .catch((err) => console.log(err));
    }, []);
    const pizzas = response;
    return (
        <div className='container'>
            <div className='row'>
                {pizzas.map((pizza) => (
                    <div key={pizza.id} className='col-md-6'>
                        <Pizza pizza={pizza} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Order;
