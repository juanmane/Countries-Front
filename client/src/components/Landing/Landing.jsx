import React from "react";
import {Link} from "react-router-dom";
import "./Landing.css"
import LoginForm from "../LoginForm/LoginForm";

export default function Landing() {
    return(
        <div className="landing">
            <h1>Guía completa de países</h1>
            <LoginForm/>
            <Link to ="/home">
                <button>Ingresar sin registrarse</button>
            </Link>
        </div>
    )
}