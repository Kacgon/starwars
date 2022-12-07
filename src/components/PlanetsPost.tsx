import { Card } from "react-bootstrap"
import FavoriteIcon from "@mui/icons-material/Favorite"
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import { ref, push, remove, update } from "firebase/database";
import {user} from '../pages/HomePage'
import {db} from './Firebase'
import { useState } from "react";
import { documentId } from "firebase/firestore";
import {GetAllFavedPlanets, GetAllLikesPlanets} from "../components/Firebase"

type PlanetsPostProp = {
    name: string
    rotation_period: number
    orbital_period: number
    diameter:number
    climate: string
}

const addLike = (name: string) => {
    push(ref(db,user+ "/likedPlanets/planets/ " +name ), {
        user, 
        
})    
}
const addFav = (name: string) => {
    push(ref(db,user+ "/favedPlanets/planets/ " +name ), {
    user,
    
})    
}


export function PlanetsPost({name, rotation_period, orbital_period, diameter, climate}:
    PlanetsPostProp) {
    
        const[fav, setFav] = useState(false);
        const favToggle=()=> {
        setFav(!fav);
    }
        const[like, setlike] = useState(false);
        const likeToggle=()=> {
        setlike(!like);
    }
    
    const DelFaved = () => {
        remove(ref(db,user+ "/favedPlanets/planets/ " +name ), 
        )
    }
    const DelLiked = () => {
        remove(ref(db,user+ "/likedPlanets/planets/ " +name ), 
        )
    }
    function DelFavHandler() {
        DelFaved()
        GetAllFavedPlanets()
    }
    
    function DelLikeHandler() {
        DelLiked()
        GetAllLikesPlanets()
    }
    
    function FavHandler() {
        favToggle()
        addFav(name)
        GetAllFavedPlanets()   
    }
    
    function LikeHandler() {
        likeToggle()
        addLike(name)
        GetAllLikesPlanets()
    }
    return <Card>
        <Card.Body className="AppContainer">
            <Card.Title >
    <span className="Text">{name}</span>
            </Card.Title>
        <Card.Body className="Text">rotation_period: <span>{rotation_period}</span></Card.Body>
        <Card.Body className="Text">orbital_period: <span>{orbital_period}</span></Card.Body>
        <Card.Body className="Text">diameter: <span >{diameter}</span></Card.Body>
        <Card.Body className="Text">climate: <span>{climate}</span></Card.Body>
        <div className="like">
        <FavoriteIcon onClick={LikeHandler} className={'toggle-unliked ' + (like ? 'toggle-liked':'')} 
        ></FavoriteIcon>
        <BookmarkAddIcon onClick={DelLikeHandler} className="DeleteFavTest"></BookmarkAddIcon>
        </div>
        <div className="Favorite">
        <BookmarkAddIcon onClick={FavHandler} className={'toggle-unfaved' + (fav ? 'toggle-faved':'')}
        ></BookmarkAddIcon>
        <BookmarkAddIcon onClick={DelFavHandler} className="DeleteFavTest"></BookmarkAddIcon>
        </div>
        </Card.Body>
    </Card>
}