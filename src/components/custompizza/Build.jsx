import React, {useEffect, useState} from "react";
import axios from "axios";

import BuildPizza from "./BuildPizza";

const Build = () =>  {
    const [response, setResponse] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:4567/build")
            .then((res) => {
                setResponse(res.data);
            })
            .catch((err) => console.log(err));
    }, [])
        const ingredients = response;
        return (
            <div className="container">
                <p>
                    pizzeria now gives you option to build your own pizza.
                    Customize your own pizza by choosing ingredients from the
                    list given below.
                </p>
                <BuildPizza ingredients={ingredients} />
            </div>
        );
}

export default Build;
