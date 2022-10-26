import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, linkWithRedirect, signInWithPopup, signOut} from 'firebase/auth'
import {child, get, getDatabase, ref, } from "firebase/database" 
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


export function GetAllLikes(){
    const dbRef = ref(db);

    get(child(dbRef, "liked/" ))
    .then((DataSnapshot)=> {
        var Liked: any[]=[];
        
        DataSnapshot.forEach(childSnaphot => {
            Liked.push(childSnaphot.val())
        }) 
        localStorage.setItem('Liked',  JSON.stringify(Liked))
    

    })
}

export function GetAllFaved(){
    const dbRef = ref(db);

    get(child(dbRef, "faved/" ))
    .then((DataSnapshot)=> {
        var Faved: any[]=[];
        
        DataSnapshot.forEach(childSnaphot => {
            Faved.push(childSnaphot.val())
        }) 
        localStorage.setItem('Faved', JSON.stringify(Faved))
               
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
        alert("signed out");
    })
    .catch((error) => {
        <h1>error</h1>
    })
}

