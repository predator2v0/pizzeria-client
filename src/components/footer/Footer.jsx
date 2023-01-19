import "./footer.scss";
import { useState } from "react";
import axios from "axios";

function Footer() {
    const [userEmail, setUserEmail] = useState("");
    const [userFeedback, setUserFeedback] = useState("");
    const feedbackEndpoint = process.env.REACT_APP_BASE_URL + "/sendfeedback";
    const submitFeedback = (e) => {
        e.preventDefault();

        axios
            .post(
                feedbackEndpoint,
                { email: userEmail, feedback: userFeedback },
                { "Content-Type": "application/json" }
            )
            .then((response) => {
                window.alert(response.data.msg);
                
            })
            .catch((error) => {
                window.alert(error.response.data.msg);
            });
    };
    return (
        <div className='footer-section'>
            <div className='footer-contents-container'>
                <h6 className='copyright'>
                    Pizzeria inc., © all rights reserved
                </h6>
                <div className='links-container'>
                    <div className='col1'>
                        <a href='#1'>Privacy Policy</a>
                        <a href='#2'>Terms of Use</a>
                        <a href='#3'>Support</a>
                        <a href='#4'>Sitemap</a>
                    </div>
                    <div className='col2'>
                        <a href='#5'>Testimonials</a>
                        <a href='#6'>Member Discounts</a>
                        <a href='#7'>FAQs</a>
                        <a href='#8'>Join Us</a>
                    </div>
                </div>
            </div>
            <div className='contact-us-container'>
                <h6 className='contact-us-heading'>Get in touch</h6>
                <div className='contact-us-form-container'>
                    <form className='contact-us-form'>
                        <input
                            type='text'
                            name='contact-us-email'
                            id='contact-us-email'
                            placeholder='email id'
                            onChange={(e) => setUserEmail(e.target.value)}
                        />
                        <textarea
                            name='contact-us-message'
                            id='contact-us-message'
                            cols='30'
                            rows='7'
                            placeholder='message'
                            onChange={(e) => setUserFeedback(e.target.value)}
                        ></textarea>
                        <input
                            type='submit'
                            value='SEND'
                            onClick={(event) => submitFeedback(event)}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Footer;
