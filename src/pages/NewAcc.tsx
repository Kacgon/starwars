import React from "react";
import {GetAllFaved, GetAllLikes, signIn} from "../components/Firebase"
import '../main.scss';


window.onload = function() {
    GetAllLikes()
    GetAllFaved()
} 


function NewAcc () {

    return (
    <div className="SignInButton"> <button className="SignInBut" onClick={signIn}>Sign in using Google</button>   
    <div className="Text">Logged in : {localStorage.getItem("name")}</div>
    <h1 className="Text">Liked Posts : {localStorage.getItem("Liked")} </h1>
    <h1 className="Text">Fav Posts : {localStorage.getItem("Faved")}</h1>
    </div>
    )
    
}

export default NewAcc