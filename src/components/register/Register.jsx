import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const userRegister = async (e) => {
        e.preventDefault();
        try {
            const userRegistered = await axios.post(
                'http://localhost:4567/register',
                { username, password },
                { 'Content-Type': 'application/json' }
            );
            if (userRegistered) {
                window.alert(userRegistered.data.msg);
                navigate('/login');
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
                        name='username'
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type='password'
                        className='form-control ml-auto mr-auto'
                        placeholder='password'
                        name='password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type='submit'
                        className='btn btn-warning btn-large ml-auto mr-auto'
                        value='register'
                        onClick={userRegister}
                    />
                </div>
            </form>
        </div>
    );
};

export default Register;
