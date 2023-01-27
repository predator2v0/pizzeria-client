import axios from "axios";
import { useState } from "react";
import "./register.scss";
import constants from "../../utils/constants/constants";

const Register = () => {
    const registerURL =
        process.env.REACT_APP_BASE_URL + constants.REGISTRATION_URL;
    const [userData, setUserData] = useState({
        emailId: "",
        name: "",
        pass: "",
        cpass: "",
        address: "",
        state: "",
        pinCode: "",
    });

    const handleChange = (e) => {
        let key = e.target.name;
        let value = e.target.value;

        setUserData({ ...userData, [key]: value });
    };

    const doRegistration = (e) => {
        e.preventDefault();
        // !remove comment
        console.log(userData);
        const registerObject = {
            email: userData.emailId,
            name: userData.name,
            password: userData.pass,
            address: userData.address,
            state: userData.state,
            pinCode: userData.pinCode,
        };
        // !remove comment
        console.log(registerObject);
        console.log(registerURL);
        axios
            .post(registerURL, registerObject, {
                "Content-Type": "Application/json",
            })
            .then((response) => {
                alert("user registered successfully");
                console.log(response);
            })
            .catch((err) => {
                alert("user not registered");
                console.log(err);
            });
    };
    return (
        <div className='registration-container'>
            <h2>Register</h2>
            <div className='reg-form-container'>
                <form action='' className='reg-form'>
                    <div className='row-1'>
                        <input
                            type='email'
                            name='emailId'
                            id='emailId'
                            placeholder='email'
                            onChange={(e) => handleChange(e)}
                        />
                        <input
                            type='text'
                            name='name'
                            id='name'
                            placeholder='name'
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div className='row-2'>
                        <input
                            type='password'
                            name='pass'
                            id='pass'
                            placeholder='password'
                            onChange={(e) => handleChange(e)}
                        />
                        <input
                            type='password'
                            name='cpass'
                            id='cpass'
                            placeholder='confirm password'
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div className='row-3'>
                        <input
                            type='text'
                            name='address'
                            id='address'
                            placeholder='address'
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div className='row-4'>
                        <input
                            type='text'
                            name='state'
                            id='state'
                            placeholder='state'
                            onChange={(e) => handleChange(e)}
                        />
                        <input
                            type='number'
                            name='pinCode'
                            id='pinCode'
                            placeholder='pin code'
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div className='row-5'>
                        <input
                            type='submit'
                            name='register'
                            id='register'
                            value='REGISTER'
                            onClick={(event) => doRegistration(event)}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
