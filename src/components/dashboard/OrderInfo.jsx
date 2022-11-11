import React from "react";

const OrderInfo = (props) => {
    const { delivered, pending, total } = props;

    return (
        <div className='border order-info'>
            {total && (
                <div>
                    <h1 className='card-data'>{total}</h1>
                    <p className='card-title text-warning'>total orders</p>
                </div>
            )}
            {pending && (
                <div>
                    <h1 className='card-data'>{pending}</h1>
                    <p className='card-title text-warning'>pending orders</p>
                </div>
            )}
            {delivered && (
                <div>
                    <h1 className='card-data'>{delivered}</h1>
                    <p className='card-title text-warning'>delivered orders</p>
                </div>
            )}
        </div>
    );
};

export default OrderInfo;
