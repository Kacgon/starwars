import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup,} from 'firebase/auth'
import {child, DataSnapshot, get, getDatabase, onValue, ref, } from "firebase/database" 
import { user } from "../pages/HomePage";


const firebaseConfig = {
  
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

    get(child(dbRef, user+ "/likedPeople" ))
    .then((DataSnapshot)=> {
        var Liked: any[]=[];
        
        DataSnapshot.forEach(childSnaphot => {
            Liked.push(childSnaphot.val())
        }) 
       localStorage.setItem('LikedPeoplebyUser', extract_name(Liked));
      
    })
}

export function GetAllLikesFilms(){
    const dbRef = ref(db);

    get(child(dbRef,user+ "/likedFilms" ))
    .then((DataSnapshot)=> {
        var Liked: any[]=[];
        
        DataSnapshot.forEach(childSnaphot => {
            Liked.push(childSnaphot.val())
        }) 
       localStorage.setItem('LikedFilmsbyUser', extract_name(Liked));
      
    })
}
export function GetAllFavedFilms(){
    const dbRef = ref(db);

    get(child(dbRef,user+ "/favedFilms" ))
    .then((DataSnapshot)=> {
        var Faved: any[]=[];
        
        DataSnapshot.forEach(childSnaphot => {
            Faved.push(childSnaphot.val())
        }) 
        localStorage.setItem('FavedFilmsbyUser', extract_name(Faved));
               
    })
}


export function GetAllLikesPlanets(){
    const dbRef = ref(db);

    get(child(dbRef, user+ "/likedPlanets" ))
    .then((DataSnapshot)=> {
        var Liked: any[]=[];
        
        DataSnapshot.forEach(childSnaphot => {
            Liked.push(childSnaphot.val())
        }) 
       localStorage.setItem('LikedPlanetsbyUser', extract_name(Liked));
      
    })
} 
export function GetAllFavedPeople(){
    const dbRef = ref(db);

    get(child(dbRef, user+ "/favedPeople" ))
    .then((DataSnapshot)=> {
        var Faved: any[]=[];
        
        DataSnapshot.forEach(childSnaphot => {
            Faved.push(childSnaphot.val())
        }) 
        localStorage.setItem('FavedPeoplebyUser', extract_name(Faved));
               
    })
}
export function GetAllFavedPlanets(){
    const dbRef = ref(db);

    get(child(dbRef,user+ "/favedPlanets" ))
    .then((DataSnapshot)=> {
        var Faved: any[]=[];
        
        DataSnapshot.forEach(childSnaphot => {
            Faved.push(childSnaphot.val())
        }) 
        localStorage.setItem('FavedPlanetsbyUser', extract_name(Faved));
               
    })
}

export function GetAllFavedSpecies(){
    const dbRef = ref(db);

    get(child(dbRef,user+ "/favedSpecies" ))
    .then((DataSnapshot)=> {
        var Faved: any[]=[];
        
        DataSnapshot.forEach(childSnaphot => {
            Faved.push(childSnaphot.val())
        }) 
        localStorage.setItem('FavedSpeciesbyUser', extract_name(Faved));
               
    })
}

export function GetAllLikesSpecies(){
    const dbRef = ref(db);

    get(child(dbRef,user+ "/likedSpecies" ))
    .then((DataSnapshot)=> {
        var Liked: any[]=[];
        
        DataSnapshot.forEach(childSnaphot => {
            Liked.push(childSnaphot.val())
        }) 
       localStorage.setItem('LikedSpeciesbyUser', extract_name(Liked));
      
    })
} 
export function GetAllLikesStarships(){
    const dbRef = ref(db);

    get(child(dbRef,user+ "/likedStarships" ))
    .then((DataSnapshot)=> {
        var Liked: any[]=[];
        
        DataSnapshot.forEach(childSnaphot => {
            Liked.push(childSnaphot.val())
        }) 
       localStorage.setItem('LikedStarshipsbyUser', extract_name(Liked));
      
    })
} 
export function GetAllFavedStarships(){
    const dbRef = ref(db);

    get(child(dbRef,user+ "/favedStarships" ))
    .then((DataSnapshot)=> {
        var Faved: any[]=[];
        
        DataSnapshot.forEach(childSnaphot => {
            Faved.push(childSnaphot.val())
        }) 
        localStorage.setItem('FavedStarshipsbyUser', extract_name(Faved));
               
    })
}
export function GetAllFavedVechicle(){
    const dbRef = ref(db);

    get(child(dbRef,user+ "/favedVechicle" ))
    .then((DataSnapshot)=> {
        var Faved: any[]=[];
        
        DataSnapshot.forEach(childSnaphot => {
            Faved.push(childSnaphot.val())
        }) 
        localStorage.setItem('FavedVechiclebyUser', extract_name(Faved));
               
    })
}
export function GetAllLikesVechicle(){
    const dbRef = ref(db);

    get(child(dbRef,user+ "/likedVechicle" ))
    .then((DataSnapshot)=> {
        var Liked: any[]=[];
        
        DataSnapshot.forEach(childSnaphot => {
            Liked.push(childSnaphot.val())
        }) 
       localStorage.setItem('LikedVechiclebyUser', extract_name(Liked));
      
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

