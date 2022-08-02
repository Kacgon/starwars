import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBflYC-HGz9GV1oqHSC32LBnHmttWDePaM",
  authDomain: "starwarsauthent.firebaseapp.com",
  projectId: "starwarsauthent",
  storageBucket: "starwarsauthent.appspot.com",
  messagingSenderId: "1061254310997",
  appId: "1:1061254310997:web:93d3508df31a2775a1f8dc"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export const signIn = () => {
    signInWithPopup(auth, provider) 
    .then((result) => {
        const name = result.user.displayName as string;
        const email = result.user.email as string;
        const avatar = result.user.photoURL as string;

        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
        localStorage.setItem("avatar", avatar)
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
