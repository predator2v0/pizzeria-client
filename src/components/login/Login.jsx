import "./login.scss";
import loginFormBanner from "../../assets/images/login_form_banner.png"

export default function Login() {
    return (
        <div className="login-container">
            <div className="login-form-banner" >
                <img src={loginFormBanner} alt="" width={400} />
            </div>
            <div className="login-form-container">
                <h2>Log In</h2>
                <form action="" className="login-form">
                    <div>
                        <input type="text" name="emailID" id="emailId" placeholder="email" />
                        <input type="password" name="password" id="password" placeholder="password" />
                    </div>
                    <div>
                        <input type="submit" value="Log In" />
                    </div>
                </form>
            </div>

        </div>
    );
}
