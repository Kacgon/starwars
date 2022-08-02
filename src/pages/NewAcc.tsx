import { Firestore } from "firebase/firestore";
import React from "react";
import {signIn, logout} from "../components/Firebase"
import '../main.scss';



function NewAcc () {

    return <div className="SignInButton"> <button className="SignInBut" onClick={signIn}>Sign in using Google</button>   
    <h1 className="Text">Logged in : {localStorage.getItem("name")}</h1>
    <h1 className="Text">Liked Posts</h1>
    <h1 className="Text">Fav Posts</h1>
    </div>
    
}

export default NewAcc