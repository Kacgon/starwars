import { TableBody } from "@material-ui/core";
import { initializeApp } from "firebase/app";
import {FacebookAuthProvider, getAuth, GoogleAuthProvider, linkWithRedirect, signInWithPopup, signOut} from 'firebase/auth'
import {child, DataSnapshot, get, getDatabase, ref, } from "firebase/database" 
import { arrayRemove, doc, snapshotEqual } from "firebase/firestore";
import { useEffect } from "react";
import { user } from "../pages/HomePage";

const firebaseConfig = {
  apiKey: "AIzaSyBflYC-HGz9GV1oqHSC32LBnHmttWDePaM",
  authDomain: "starwarsauthent.firebaseapp.com",
  projectId: "starwarsauthent",
  storageBucket: "starwarsauthent.appspot.com",
  messagingSenderId: "1061254310997",
  appId: "1:1061254310997:web:93d3508df31a2775a1f8dc"
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const db = getDatabase(app);
const dbRef = ref(db, 'people')


export function GetAllData(){
    const dbRef = ref(db);

    get(child(dbRef, "people/liked/"+user ))
    .then((DataSnapshot)=> {
        var LikedPeop: any[]=[];
        
        DataSnapshot.forEach(childSnaphot => {
            LikedPeop.push(childSnaphot.val())
        }) 
    
        localStorage.setItem("LikedPeop", JSON.stringify(LikedPeop))
    
        
    })
}

export const signIn = () => {
    signInWithPopup(auth, provider) 
    .then((result) => {
        const name = result.user.displayName as string;
        const email = result.user.email as string;
        const avatar = result.user.photoURL as string;

        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
        localStorage.setItem("avatar", avatar)
        refreshPage()
    })
    .catch((error) => {
        console.log(error);
    })
}


export function refreshPage() {
    window.location.reload()
}

export const logout = async () => {
  
    
    auth.signOut().then(() => {
        localStorage.clear()
        console.log('Signed Out');
    })
    .catch((error) => {
        <h1>error</h1>
    })
}

