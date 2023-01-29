import axios from "axios";
import { useState } from "react";
import loginFormBanner from "../../assets/images/login_form_banner.png";
import constants from "../../utils/constants/constants";
import { allValid, doLoginValidation } from "../../utils/login/loginUtils";
import "./login.scss";

export default function Login() {
    const [loginData, setLoginData] = useState({ emailId: "", password: "" });
    const loginURL = process.env.REACT_APP_BASE_URL + constants.LOGIN_URL;
    const handleChange = (e) => {
        let key = e.target.name;
        let value = e.target.value;

        setLoginData({ ...loginData, [key]: value });
        doLoginValidation(e.target.id, e.target.name, e.target.value);
    };
    const doLogin = (e) => {
        e.preventDefault();
        if (allValid(loginData)) {
            const loginObject = {
                email: loginData.emailId,
                password: loginData.password
            }
            axios
                .post(loginURL, loginObject, {
                    "Content-Type": "Application/json",
                })
                .then((response) => {
                    alert(response.data.msg);
                })
                .catch((err) => {
                    alert(err.response.data.msg);
                });
        } else {
            alert("Unable to login, please check your credentials!");
        }
    };
    return (
        <div className='login-container'>
            <div className='login-form-banner'>
                <img src={loginFormBanner} alt='' width={400} />
            </div>
            <div className='login-form-container'>
                <h2>Log In</h2>
                <form action='' className='login-form'>
                    <div>
                        <input
                            type='text'
                            name='emailId'
                            id='emailId'
                            placeholder='email'
                            onChange={(e) => handleChange(e)}
                        />
                        <input
                            type='password'
                            name='password'
                            id='password'
                            placeholder='password'
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div>
                        <input
                            type='submit'
                            value='Log In'
                            onClick={(e) => doLogin(e)}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
