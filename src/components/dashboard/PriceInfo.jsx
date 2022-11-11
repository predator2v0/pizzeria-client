import React from "react";

const PriceInfo = (props) => {
    const { amount } = props;
    return (
        <div className='price-info border'>
            <h1 className='card-data'>{amount}</h1>
            <p className='card-title text-warning'>payable amount</p>
        </div>
    );
};

export default PriceInfo;
