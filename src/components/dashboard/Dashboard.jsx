import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Dashboard.css";
import AllOrders from "./AllOrders";
import OrderInfo from "./OrderInfo";
import PriceInfo from "./PriceInfo";
import UserInfo from "./UserInfo";
import ContactInfo from "./ContactInfo";

const Dashboard = () => {
    const [user, setUser] = useState({user:{}});
    const [orders, setOrders] = useState({
        orders: [],
        orderCount: 0,
        deliveredCount: 0,
        pendingCount: 0,
        amount: 0,
    });

    const userName = useSelector((username) => username.userReducer);
    useEffect(() => {
        axios
            .get(`http://localhost:4567/dashboard/${userName}`)
            .then((userData) => {
                setUser(userData.data.user);
            })
            .catch((err) => console.log("hello", err));
        axios
            .get(`http://localhost:4567/dashboard/${userName}/orders`)
            .then((orderData) => {
                setOrders(orderData.data);
            })
            .catch((err) => console.log("hi", err));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className='container user-dashboard'>
            <div className='dashboard-container'>
                <UserInfo user={user} />
                <PriceInfo amount={orders.amount} />
                <ContactInfo />
                <OrderInfo total={orders.orderCount} />
                <OrderInfo pending={orders.pendingCount} />
                <OrderInfo delivered={orders.deliveredCount} />
            </div>
            <AllOrders orders={orders.orders} />
        </div>
    );
};

export default Dashboard;
