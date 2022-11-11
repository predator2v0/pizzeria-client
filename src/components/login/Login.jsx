import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

import "./Login.css";
import { loginAction } from "../../redux/user/userActions.js";

export default function Login() {
    const authDispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const userLogin = async (e) => {
        e.preventDefault();

        try {
            const userLoggedIn = await axios.post(
                "http://localhost:4567/login",
                { username, password },
                { "Content-Type": "application/json" }
            );
            if (userLoggedIn) {
                authDispatch(loginAction(username));
                navigate("/dashboard");
            }
        } catch (err) {
            window.alert(err.response.data.msg);
        }
    };
    return (
        <div className='container login-container mt-5'>
            <form method='POST'>
                <div className='form-group form-vertical'>
                    <input
                        type='text'
                        className='form-control ml-auto mr-auto'
                        placeholder='username'
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type='password'
                        className='form-control ml-auto mr-auto'
                        placeholder='password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type='submit'
                        className='btn btn-warning btn-large ml-auto mr-auto'
                        value='login'
                        onClick={userLogin}
                    />
                </div>
            </form>
        </div>
    );
}
