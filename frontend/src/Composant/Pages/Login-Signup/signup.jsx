import React, { useState } from "react";
import './signup.css'
export default function Signup(){
    const[psw,setpsw]=useState(false);
    function ShowPsw(){
        setpsw(!psw)
    }
    return(
        <div className="signupPage">
            <div className="ContentForm">
           
            <form action="" className="formsignup">
            <img className="logosignup" src="fit.png" alt="" />  
                <h1>S'inscrire</h1><br />
               
              
                <div className="inputbox">
                <input type="text" placeholder="Nom" required/>
                <ion-icon name="person-outline"></ion-icon>
               </div>
                <div className="inputbox">
                <input type="text" placeholder="Adresse email" required/>
                <ion-icon name="mail-outline"></ion-icon>
               </div>
               <div className="inputbox">
                   <input type={psw ?'text':'password'} placeholder="Mot de passe" required/>
                   <ion-icon name={psw ?'eye-off-outline' : 'eye-outline'} onClick={ShowPsw}></ion-icon>
               </div>
               <div className="inputbox">
                   <input type={psw ?'text':'password'} placeholder="Confirmer Mot de passe" required/>
                   <ion-icon name={psw ?'eye-off-outline' : 'eye-outline'} onClick={ShowPsw}></ion-icon>
               </div>
                <button className="btn-Login">S'inscrire</button>
            </form>
            <div className="imgForm">
               
               </div>
            </div>
        </div>
    )
}