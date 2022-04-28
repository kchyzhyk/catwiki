import React from 'react'
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../css/img/logo.svg";

export const Header = () => {
    return (
        <header className="App-header">
            <Link to={'/'}>
                <Logo/>
            </Link>
        </header>
    )
}
