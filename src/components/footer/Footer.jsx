import './footer.scss';

function Footer() {
    return (
        <div className="footer-section">
            <div className="footer-contents-container">
                <h6 className='copyright'>Pizzeria inc., © all rights reserved</h6>
                <div className="links-container">
                    <div className='col1'>
                        <a href="#1">Privacy Policy</a>
                        <a href="#2">Terms of Use</a>
                        <a href="#3">Support</a>
                        <a href="#4">Sitemap</a>
                    </div>
                    <div className='col2'>
                        <a href="#5">Testimonials</a>
                        <a href="#6">Member Discounts</a>
                        <a href="#7">FAQs</a>
                        <a href="#8">Join Us</a>
                    </div>
                </div>
            </div>
            <div className="contact-us-container">
                <h6 className='contact-us-heading'>Get in touch</h6>
                <div className="contact-us-form-container">
                    <form action="" className="contact-us-form">
                        <input type="text" name="contact-us-email" id="contact-us-email" placeholder='email id' />
                        <textarea name="contact-us-message" id="contact-us-message" cols="30" rows="7" placeholder='message'></textarea>
                        <input type="submit" value="SEND" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Footer;
