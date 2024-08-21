import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({ setShowLogin }) => {
    const [currstate, setCurrstate] = useState("Login")
    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className="login-popup-title"></div>
                <h2>{currstate} </h2>
                <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />

                <div className="login-popup-input">
                    {currstate === "Login" ? <></> : <input type="text" placeholder="your name " required />}

                    <input type="email" placeholder="your email" required />
                    <input type="passward" placeholder="your passward" required />



                </div>
                <button>{currstate === "Sign up" ? "create account " : "login "}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>by contwning , i agree to the term of use & privacy policy .</p>
                </div>
                {currstate==="Login"
               ? <p> create a new acount <span onClick={()=>setCurrstate("Sign Up")}>click here </span></p>
           : <p> already have a  an account ? <span onClick={()=>setCurrstate("Login")}>login here</span></p>
    }
           </form>

        </div>
    )
}

export default LoginPopup
