import './register.scss'

const Register = () => {
    return (
        <div className='registration-container'>
            <h2>Register</h2>
            <div className="reg-form-container">
                <form action="" className='reg-form'>
                    <div className='row-1'>
                        <input type="email" name="emailId" id="emailId" placeholder='email' />
                        <input type="text" name="name" id="name" placeholder='name' />
                    </div>
                    <div className='row-2'>
                        <input type="password" name="pass" id="pass" placeholder='password' />
                        <input type="password" name="cpass" id="cpass" placeholder='confirm password' />
                    </div>
                    <div className='row-3'>
                        <input type="text" name="address" id="address" placeholder='address' />
                    </div>
                    <div className='row-4'>
                        <input type="text" name="state" id="state" placeholder='state' />
                        <input type="number" name="zipCode" id="zipCode" placeholder='zip code' />
                    </div>
                    <div className="row-5">
                        <input type="submit" name="register" id="register" value="REGISTER" />
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Register;
