import { Card } from "react-bootstrap"
import FavoriteIcon from "@mui/icons-material/Favorite"
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import {db} from './Firebase'
import { ref, push, remove, update, onValue, set, getDatabase, get, child} from "firebase/database";
import {user} from '../pages/HomePage'
import { useEffect, useState } from "react";
import {GetAllFavedPeople, GetAllLikesPeople } from "../components/Firebase"
import { Typography } from "@mui/material";


export type PeoplePostProp = {
    name: string
    height: number
    mass: number
    hair_color:string
    skin_color: string
}


const addLike = (name: string) => {
    push(ref(db, user+ "/likedPeople/people/ " +name ), {
        user, 
        
})    
}


const addFav = (name: string) => {
    push(ref(db, user+ "/favedPeople/people/ " +name ), {
    user,
    
})    
}


export function PeoplePost({name, height, mass, hair_color,skin_color}:
    PeoplePostProp) {
        var [counter, setCounter] = useState()
        function GetCounterFromDB(){
            const dbRef = ref(db);
            get(child(dbRef,name +'/likes/'))
            .then(async (DataSnapshot)=> {
                var Counter: any=[];
                DataSnapshot.forEach(childSnapshot => {
                    Counter.push(childSnapshot.val())
                })
            setCounter(Counter.length)
        })    
        }
 

    useEffect(()=>{
        GetCounterFromDB()
    })
        
        const[fav, setFav] = useState(false);
        const favToggle=()=> {
        setFav(!fav);
    }
        const[like, setlike] = useState(false);
        const likeToggle=()=> {
        setlike(!like);
    }
    
    const DelFaved = () => {
        remove(ref(db,user+ "/favedPeople/people/ " +name ), 
        )
    }
    
    
    const DelLiked = () => {
        remove(ref(db,user+ "/likedPeople/people/ " +name ), 
        )
    }

    
    

    function CounterHandler(){
        if (liked == true){
            push(ref(db,name +'/likes/' + user), {
                user
            }) 
        }else {
            remove(ref(db,name +'/likes/' + user))
        
        }
    }
    
    
    
    const[liked, setLiked] = useState(true);
    function LikeHandler() {
        if (liked == true) {
            addLike(name)
            GetAllLikesPeople()
            setLiked(!liked)
            localStorage.setItem('LIKED_STATUS'+name, JSON.stringify(liked))
            likeToggle()
            CounterHandler()
          
        } else {
            DelLiked()
            GetAllLikesPeople() 
            setLiked(!liked)
            localStorage.setItem('LIKED_STATUS'+name, JSON.stringify(liked))
            likeToggle()
            CounterHandler()
           
        }
    }
    
    const getLikeStatus : any = localStorage.getItem('LIKED_STATUS'+name)
    const LikeStatus = JSON.parse(getLikeStatus) 
    
    const[faved, setFaved] = useState(true);
    function FavoriteHandler() {
        if (faved == true) {
            favToggle()
            addFav(name)
            GetAllFavedPeople()
            setFaved(!faved)
        } else {
            DelFaved()
            GetAllFavedPeople()
            favToggle()
            setFaved(!faved)
        }
    }
    

    if(localStorage.getItem("name") == null){
        return <Card>
            <Card.Body className="AppContainer" >
                <Card.Title >
        <span className="Text">{name}</span>
                </Card.Title>
            <Card.Body className="Text">height: <span>{height}</span></Card.Body>
            <Card.Body className="Text">mass: <span>{mass}</span></Card.Body>
            <Card.Body className="Text">hair_color: <span >{hair_color}</span></Card.Body>
            <Card.Body className="Text">skin_color: <span>{skin_color}</span></Card.Body>
            <h1 className="MustBeloggedinAlert">You heave to log in to like or fav posts</h1>
            </Card.Body>
        </Card>
    }else
    
        return <Card>
            <Card.Body className="AppContainer" >
                <Card.Title >
        <span className="Text">{name}</span>
                </Card.Title>
            <Card.Body className="Text">height: <span>{height}</span></Card.Body>
            <Card.Body className="Text">mass: <span>{mass}</span></Card.Body>
            <Card.Body className="Text">hair_color: <span >{hair_color}</span></Card.Body>
            <Card.Body className="Text">skin_color: <span>{skin_color}</span></Card.Body>
            <div className="like">
            <FavoriteIcon onClick={LikeHandler} className={(!LikeStatus ? 'toggle-unliked' :'') + (LikeStatus ? 'toggle-liked':'')} 
            ></FavoriteIcon>
            <Typography id="root">like counter: {counter}</Typography>
            </div>
            <div className="Favorite">
            <BookmarkAddIcon onClick={FavoriteHandler} className={'toggle-unfaved' + (fav ? 'toggle-faved':'')}
            ></BookmarkAddIcon>
            </div>
            </Card.Body>
        </Card>
    }