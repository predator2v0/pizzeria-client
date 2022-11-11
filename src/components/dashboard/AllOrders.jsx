import React from "react";

const AllOrders = (props) => {
    const { orders } = props;
    return (
        <div className='user-order-history'>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>order id</th>
                        <th>items</th>
                        <th>price</th>
                        <th>status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => {
                        return (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>
                                    <ul>
                                        {order.items.map((item) => (
                                            <li>{item.name}</li>
                                        ))}
                                    </ul>
                                </td>
                                <td>{order.price}</td>
                                <td>{order.status}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default AllOrders;
