// Test for order page

// import React, { Component } from "react";
// import axios from "axios";
// import Pizza from "./Pizza";
// class Test extends Component {
//     constructor() {
//         super();
//         this.state = { message: [] };
//     }
//     componentDidMount() {
//         axios.get("http://localhost:9999/order").then((res) => {
//             this.setState({ message: res.data });
//         });
//     }
//     render() {
//         const pizzas = this.state.message;
//         return (
//             <div className="container">
//                 <div className="row">
//                     {pizzas.map((pizza) => (
//                         <div key={pizza.id} className="col-md-6">
//                             <Pizza pizza={pizza} />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         );
//     }
// }

// export default Test;

// Test for build page.

// import React, { Component } from "react";
// import axios from "axios";
// import BuildPizza from "./BuildPizza";

// class Test extends Component {
//     constructor() {
//         super();
//         this.state = { response: [] };
//     }
//     componentDidMount() {
//         axios.get("http://localhost:9999/build").then((res) => {
//             this.setState({ response: res.data });
//         });
//     }
//     render() {
//         const ingredients = this.state.response;
//         return (
//             <div className="container">
//                 <p>
//                     pizzeria now gives you option to build your own pizza.
//                     Customize your own pizza by choosing ingredients from the
//                     list given below.
//                 </p>
//                 <BuildPizza ingredients={ingredients} />
//             </div>
//         );
//     }
// }

// export default Test;

// BuildPizza class component
// class BuildPizza extends Component {
//     render() {
//         return (
//             <div className="build-ingredients-container">
//                 <table className="table table-striped table-bordered">
//                     <tbody>
//                         {this.props.ingredients.map((ingredient) => (
//                             <tr key={ingredient.id}>
//                                 <td>
//                                     <img
//                                         src={ingredient.image}
//                                         alt={ingredient.tname}
//                                         width="50px"
//                                         height="50px"
//                                     />
//                                 </td>
//                                 <td>
//                                     <p>
//                                         {ingredient.tname} &nbsp; &nbsp;
//                                         <i class="fa fa-inr"></i>{" "}
//                                         {ingredient.price}
//                                     </p>
//                                 </td>
//                                 <td>
//                                     {" "}
//                                     <input
//                                         type="checkbox"
//                                         name={ingredient.tname}
//                                         value={ingredient.price}
//                                         id=""
//                                     />{" "}
//                                     <span className="text-warning">Add</span>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//                 <div>
//                     <h4>Total Cost:</h4>
//                 </div>
//                 <div>
//                     <button className="btn btn-dark text-info">
//                         Build Ur Pizza
//                     </button>
//                 </div>
//             </div>
//         );
//     }
// }

// export default BuildPizza;

// Pizza Function Component
import React from "react";
import "./Pizza.css";


function Pizza(props) {
    const pizza = props.pizza;
    const ingredients = pizza.ingredients.join(", ");
    const toppings = pizza.topping.join(", ");

    return (
            <div className="pizza-conatainer">
                <div className="row">
                    <div className="col-2 inner-start-container">
                        <p>
                            <strong>{pizza.name}</strong>
                        </p>

                        {pizza.type === "veg" ? <Veg /> : <Nonveg />}

                        <p>
                            {" "}
                            <i className="fa fa-inr"></i>{" "}
                            <strong>{pizza.price}</strong>
                        </p>
                    </div>
                    <div className="col-7 inner-middle-container">
                        <p>{pizza.description}</p>
                        <p>
                            <strong>Ingredients:</strong> {ingredients}
                        </p>
                        <p>
                            <strong>Toppings:</strong> {toppings}
                        </p>
                    </div>
                    <div className="col-3 inner-end-container">
                        <img
                            src={pizza.image}
                            alt=""
                            width="100px"
                            height="100px"
                        />
                        <button className="btn btn-warning text-white btn-sm mt-2">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
    );
}

export default Pizza;
export function Veg() {
    return <div className="type-veg"></div>;
}

export function Nonveg() {
    return <div className="type-nonveg"></div>;
}
