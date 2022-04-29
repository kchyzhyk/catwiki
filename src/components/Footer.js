import React from 'react'
import {Link} from "react-router-dom";
import IntroLogo from "../css/img/logo-white.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <Link to={"/"}>
                <img src={IntroLogo} alt=""/>
            </Link>

            <div className="footer-copyright">
                &copy; created by username - devChallenge.io {new Date().getFullYear()}
            </div>
        </footer>
    )
}
