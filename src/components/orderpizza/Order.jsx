import axios from "axios";
import React, { useEffect, useState } from "react";

import Pizza from "./Pizza";

const Order = () => {
    const [response, setResponse] = useState([]);
    useEffect(() => {
        const searchQuery = window.location.search.replace("?", "").trim();
        let url;
        if (searchQuery) {
            url = `http://localhost:4567/pizza?q=${searchQuery}`;
        } else {
            url = "http://localhost:4567/pizza";
        }
        console.log(url);
        axios
            .get(url)
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
