import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, linkWithRedirect, signInWithPopup, signOut} from 'firebase/auth'
import {child, get, getDatabase, QueryConstraint, ref, } from "firebase/database" 
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


function extract_name(dict: any[]=[]){
    let root = dict[0]
    let names = ''
    for (let key in root) {
        names += String(key) + ', '
    }
    return names
}

export function GetAllLikesPeople(){
    const dbRef = ref(db);

    get(child(dbRef, "likedPeople/" ))
    .then((DataSnapshot)=> {
        var Liked: any[]=[];
        
        DataSnapshot.forEach(childSnaphot => {
            Liked.push(childSnaphot.val())
        }) 
       localStorage.setItem('LikedPeople', extract_name(Liked));
      
    })
}
export function GetAllLikesFilms(){
    const dbRef = ref(db);

    get(child(dbRef, "likedFilms/" ))
    .then((DataSnapshot)=> {
        var Liked: any[]=[];
        
        DataSnapshot.forEach(childSnaphot => {
            Liked.push(childSnaphot.val())
        }) 
       localStorage.setItem('LikedFilms', extract_name(Liked));
      
    })
}
export function GetAllFavedFilms(){
    const dbRef = ref(db);

    get(child(dbRef, "favedFilms/" ))
    .then((DataSnapshot)=> {
        var Faved: any[]=[];
        
        DataSnapshot.forEach(childSnaphot => {
            Faved.push(childSnaphot.val())
        }) 
        localStorage.setItem('FavedFilms', extract_name(Faved));
               
    })
}


export function GetAllLikesPlanets(){
    const dbRef = ref(db);

    get(child(dbRef, "likedPlanets/" ))
    .then((DataSnapshot)=> {
        var Liked: any[]=[];
        
        DataSnapshot.forEach(childSnaphot => {
            Liked.push(childSnaphot.val())
        }) 
       localStorage.setItem('LikedPlanets', extract_name(Liked));
      
    })
} 
export function GetAllFavedPeople(){
    const dbRef = ref(db);

    get(child(dbRef, "favedPeople/" ))
    .then((DataSnapshot)=> {
        var Faved: any[]=[];
        
        DataSnapshot.forEach(childSnaphot => {
            Faved.push(childSnaphot.val())
        }) 
        localStorage.setItem('FavedPeople', extract_name(Faved));
               
    })
}
export function GetAllFavedPlanets(){
    const dbRef = ref(db);

    get(child(dbRef, "favedPlanets/" ))
    .then((DataSnapshot)=> {
        var Faved: any[]=[];
        
        DataSnapshot.forEach(childSnaphot => {
            Faved.push(childSnaphot.val())
        }) 
        localStorage.setItem('FavedPlanets', extract_name(Faved));
               
    })
}

export function GetAllFavedSpecies(){
    const dbRef = ref(db);

    get(child(dbRef, "favedSpecies/" ))
    .then((DataSnapshot)=> {
        var Faved: any[]=[];
        
        DataSnapshot.forEach(childSnaphot => {
            Faved.push(childSnaphot.val())
        }) 
        localStorage.setItem('FavedSpecies', extract_name(Faved));
               
    })
}

export function GetAllLikesSpecies(){
    const dbRef = ref(db);

    get(child(dbRef, "likedSpecies/" ))
    .then((DataSnapshot)=> {
        var Liked: any[]=[];
        
        DataSnapshot.forEach(childSnaphot => {
            Liked.push(childSnaphot.val())
        }) 
       localStorage.setItem('LikedSpecies', extract_name(Liked));
      
    })
} 
export function GetAllLikesStarships(){
    const dbRef = ref(db);

    get(child(dbRef, "likedStarships/" ))
    .then((DataSnapshot)=> {
        var Liked: any[]=[];
        
        DataSnapshot.forEach(childSnaphot => {
            Liked.push(childSnaphot.val())
        }) 
       localStorage.setItem('LikedStarships', extract_name(Liked));
      
    })
} 
export function GetAllFavedStarships(){
    const dbRef = ref(db);

    get(child(dbRef, "favedStarships/" ))
    .then((DataSnapshot)=> {
        var Faved: any[]=[];
        
        DataSnapshot.forEach(childSnaphot => {
            Faved.push(childSnaphot.val())
        }) 
        localStorage.setItem('FavedStarships', extract_name(Faved));
               
    })
}
export function GetAllFavedVechicle(){
    const dbRef = ref(db);

    get(child(dbRef, "favedVechicle/" ))
    .then((DataSnapshot)=> {
        var Faved: any[]=[];
        
        DataSnapshot.forEach(childSnaphot => {
            Faved.push(childSnaphot.val())
        }) 
        localStorage.setItem('FavedVechicle', extract_name(Faved));
               
    })
}
export function GetAllLikesVechicle(){
    const dbRef = ref(db);

    get(child(dbRef, "likedVechicle/" ))
    .then((DataSnapshot)=> {
        var Liked: any[]=[];
        
        DataSnapshot.forEach(childSnaphot => {
            Liked.push(childSnaphot.val())
        }) 
       localStorage.setItem('LikedVechicle', extract_name(Liked));
      
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

