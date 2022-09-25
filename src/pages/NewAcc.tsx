import { onValue } from "firebase/database";
import React, {useEffect, useState} from "react";
import {signIn, logout, db} from "../components/Firebase"
import '../main.scss';
import { ref } from "firebase/database";
import {GetAllData} from '../components/Firebase'


window.onload = GetAllData


function NewAcc () {

    

    return (
    <div className="SignInButton"> <button className="SignInBut" onClick={signIn}>Sign in using Google</button>   
    <div className="Text">Logged in : {localStorage.getItem("name")}</div>
    <h1 className="Text">Liked Posts : {localStorage.getItem("LikedPeop")} </h1>
    <h1 className="Text">Fav Posts : </h1>
    </div>
    )
    
}

export default NewAcc