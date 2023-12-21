import { Link } from "react-router-dom";
import { DefouldNav } from "../navbars/DefouldNav";
import "./login.scss";
import { api, byId } from "../api/api";
import axios from "axios";
import { toast } from "react-toastify";

export const Register = () => {

    // login
    const addRegister = () => {
        let addData = {
            phone_number: byId("phone_number").value,
            username: byId("username").value,
            password: byId("password").value
        }
        axios.post(api + "register/", addData)
            .then(() => {
                toast.success("Registratsiyadan muvaffaqiyatli o'tdingiz✔");
                byId("goLogin").click();
            })
            .catch((error) => {
                toast.error("Xatolik yuz berdi ma'lumotlarni tekshirib qaytadan urinib ko'ring❓")
                console.log(error);
                console.log(addData);
            })
    }

    return (
        <div className="login_section">
            <Link id="goLogin" to="/login"></Link>
            <DefouldNav />
            <section className="login_section-box">
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span>

                <div className="login_box">
                    <div className="login_content">
                        <h2>Sign up</h2>
                        <div className="login_form">
                            <div className="login_inputBox">
                                <input id="username" required /> <i>Username</i>
                            </div>
                            <div className="login_inputBox">
                                <input id="phone_number" required /> <i>+998 99 999 99 99</i>
                            </div>
                            <div className="login_inputBox">
                                <input type="password" id="password" required /> <i>Password</i>
                            </div>
                            <div className="login_links">
                                <Link></Link>
                                <Link></Link>
                            </div>
                            <div className="login_inputBox">
                                <button
                                    onClick={addRegister}
                                    className="glow-on-hover">Sign up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
