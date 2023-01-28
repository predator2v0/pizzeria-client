import axios from "axios";
import { useState } from "react";
import constants from "../../utils/constants/constants";
import { doValidation, allValid, applyInvalidClass } from "../../utils/registration/registrationUtils";
import "./register.scss";

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
        pincode: "",
    });
    const handleChange = (e) => {
        let key = e.target.name;
        let value = e.target.value;

        setUserData({ ...userData, [key]: value });
    };

    const doRegistration = (e) => {
        e.preventDefault();
        if (userData.pass !== userData.cpass) {
            applyInvalidClass('cpass')
            alert("password must be similar to confirm password!");
        } else {
            if (allValid(userData)) {
                const registerObject = {
                    email: userData.emailId,
                    name: userData.name,
                    password: userData.pass,
                    address: userData.address,
                    state: userData.state,
                    pincode: userData.pincode,
                };
                axios
                    .post(registerURL, registerObject, {
                        "Content-Type": "Application/json",
                    })
                    .then((response) => {
                        alert(response.data.msg);
                    })
                    .catch((err) => {
                        alert(err.response.data.msg);
                    });
            } else {
                alert("please fill all the fields correctly!");
            }
        }
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
                            placeholder='email*'
                            onChange={(e) => handleChange(e)}
                            onBlur={(e) =>
                                e.target.value &&
                                doValidation(
                                    e.target.id,
                                    e.target.name,
                                    e.target.value
                                )
                            }
                        />
                        <input
                            type='text'
                            name='name'
                            id='name'
                            placeholder='name*'
                            onChange={(e) => handleChange(e)}
                            onBlur={(e) =>
                                e.target.value &&
                                doValidation(
                                    e.target.id,
                                    e.target.name,
                                    e.target.value
                                )
                            }
                        />
                    </div>
                    <div className='row-2'>
                        <input
                            type='password'
                            name='pass'
                            id='pass'
                            placeholder='password*'
                            onChange={(e) => handleChange(e)}
                            onBlur={(e) =>
                                e.target.value &&
                                doValidation(
                                    e.target.id,
                                    e.target.name,
                                    e.target.value
                                )
                            }
                        />
                        <input
                            type='password'
                            name='cpass'
                            id='cpass'
                            placeholder='confirm password*'
                            onChange={(e) => handleChange(e)}
                            onBlur={(e) =>
                                e.target.value &&
                                doValidation(
                                    e.target.id,
                                    e.target.name,
                                    e.target.value
                                )
                            }
                        />
                    </div>
                    <div className='row-3'>
                        <input
                            type='text'
                            name='address'
                            id='address'
                            placeholder='address*'
                            onChange={(e) => handleChange(e)}
                            onBlur={(e) =>
                                e.target.value &&
                                doValidation(
                                    e.target.id,
                                    e.target.name,
                                    e.target.value
                                )
                            }
                        />
                    </div>
                    <div className='row-4'>
                        <input
                            type='text'
                            name='state'
                            id='state'
                            placeholder='state*'
                            onChange={(e) => handleChange(e)}
                            onBlur={(e) =>
                                e.target.value &&
                                doValidation(
                                    e.target.id,
                                    e.target.name,
                                    e.target.value
                                )
                            }
                        />
                        <input
                            type='number'
                            name='pincode'
                            id='pincode'
                            placeholder='pin code*'
                            onChange={(e) => handleChange(e)}
                            onBlur={(e) =>
                                e.target.value &&
                                doValidation(
                                    e.target.id,
                                    e.target.name,
                                    e.target.value
                                )
                            }
                        />
                    </div>
                    <div className='row-5' id='error-container'>
                        <p>* are mandatory fields</p>
                    </div>
                    <div className='row-6'>
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
