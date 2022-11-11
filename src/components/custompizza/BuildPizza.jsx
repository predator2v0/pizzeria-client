import { useState } from 'react';

import './BuildPizza.css';

export default function BuildPizza(props) {
    const ingredients = props.ingredients;
    const [total, setTotal] = useState(0);
    const handleChange = (e, price, tname) => {
        let checked = e.target.checked;
        if (checked) {
            setTotal(total + price);
        } else {
            setTotal(total - price);
        }
    };
    return (
        <div className='build-ingredients-container'>
            <table className='table table-striped table-bordered'>
                <tbody>
                    {ingredients.map((ingredient, index) => (
                        <tr key={index}>
                            <td className='ing-img-col'>
                                <img
                                    src={ingredient.image}
                                    alt={ingredient.tname}
                                    width='50px'
                                    height='50px'
                                />
                            </td>
                            <td className='ing-details-col'>
                                <p>
                                    {ingredient.tname} &nbsp; &nbsp;
                                    <i className='fa fa-inr'></i>{' '}
                                    {ingredient.price}
                                </p>
                            </td>
                            <td className='ing-add-col'>
                                {' '}
                                <input
                                    type='checkbox'
                                    name={ingredient.tname}
                                    value={ingredient.price}
                                    onChange={(event) =>
                                        handleChange(
                                            event,
                                            ingredient.price,
                                            ingredient.tname
                                        )
                                    }
                                />{' '}
                                <span className='text-warning'>Add</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='cost-container'>
                <h4 className='text-left'>Total Cost:{total}</h4>
            </div>
            <div>
                <button
                    className='btn btn-dark text-warning btn-hover'
                >
                    Build Ur Pizza
                </button>
            </div>
        </div>
    );
}
