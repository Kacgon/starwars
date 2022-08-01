import { Firestore } from "firebase/firestore";
import React from "react";
import {signIn, logout} from "../components/Firebase"


function NewAcc () {
    return <div> <button  onClick={signIn}>Sign in using Google</button>   
    <h1>{localStorage.getItem("email")}</h1>
    <h1>{localStorage.getItem("name")}</h1>
    </div>
}

export default NewAcc