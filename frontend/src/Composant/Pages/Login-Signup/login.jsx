import React from "react";
import { useState } from "react";
import './login.css'
export default function Login(){
    const [showPassword, setShowPassword] = useState(false);

    const Visible = () => {
        setShowPassword(!showPassword);
    };
    return(
        <div className="loginPage">
            <div className="ContentForm">
            <div className="imgForm">
               
            </div>
            <form action="" className="formLogin">
            <img className="logoForm" src="fit.png" alt="" />  
                <h1>Se connecter</h1><br />
               
              
                <div className="inputbox">
                <input type="text" placeholder="Adresse email" required/>
                <ion-icon name="mail-outline"></ion-icon>
               </div>
               <div className="inputbox">
               <input 
                            type={showPassword ? "text" : "password"} 
                            placeholder="Mot de passe" 
                            required 
                        />
                    <ion-icon 
                            name={showPassword ? "eye-off-outline" : "eye-outline"} 
                             onClick={Visible} 
                     ></ion-icon>
               </div>
                <button className="btn-Login">Se Connecter</button>
                <p className="nocompte">Pas encore de compte ? <a href="/signup"> Inscrivez-vous ici </a> </p>
            </form>
            </div>
        </div>
    )
}