import "./App.css";
import Home from "./components/home/Home";
import Order from "./components/orderpizza/Order";
import Build from "./components/custompizza/Build";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";
import Cart from "./components/cart/Cart";
import Register from "./components/register/Register";
import Dashboard from "./components/dashboard/Dashboard";
function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                {/* <Route path="/" component={Navbar} /> */}
                <Route path="/" element={<Home />} />
                <Route path="/order" element={<Order />} />
                <Route path="/build" element={<Build />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>

            <Footer />
        </div>
    );
}

export default App;
