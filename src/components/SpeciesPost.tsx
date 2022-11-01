import { Card } from "react-bootstrap"
import FavoriteIcon from "@mui/icons-material/Favorite"
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import { push, ref, remove, set } from "firebase/database";
import {user} from '../pages/HomePage'
import {db} from './Firebase'
import { useState } from "react";
import {GetAllFavedSpecies, GetAllLikesSpecies} from "../components/Firebase"

type SpeciesPostProp = {
    name: string
    classification: string
    designation: string
    average_height:string
    skin_colors: string
}

const addLike = (name: string) => {
    push(ref(db,"likedSpecies/species/ " +name ), {
        user, 
        
})    
}

const addFav = (name: string) => {
    push(ref(db,"favedSpecies/species/ " +name ), {
    user,
    
})    
}



export function SpeciesPost({
    name, 
    classification,
    designation,
    average_height,
    skin_colors}
    :SpeciesPostProp) 
{
    const[fav, setFav] = useState(false);
    const favToggle=()=> {
    setFav(!fav);
}
    const[like, setlike] = useState(false);
    const likeToggle=()=> {
    setlike(!like);
}

const DelFaved = () => {
    remove(ref(db,"favedSpecies/species/ " +name ), 
    )
}
const DelLiked = () => {
    remove(ref(db,"likedSpecies/species/ " +name ), 
    )
}

function DelFavHandler() {
    DelFaved()
    GetAllFavedSpecies()
}

function DelLikeHandler() {
    DelLiked()
    GetAllLikesSpecies()
}

function FavHandler() {
    favToggle()
    addFav(name)
    GetAllFavedSpecies()
}

function LikeHandler() {
    likeToggle()
    addLike(name)
    GetAllLikesSpecies()
}

    return <Card>
        <Card.Body className="AppContainer">
            <Card.Title >
    <span className="Text">{name}</span>
            </Card.Title>
        <Card.Body className="Text">classification: <span>{classification}</span></Card.Body>
        <Card.Body className="Text">designation: <span>{designation}</span></Card.Body>
        <Card.Body className="Text">average_height: <span >{average_height}</span></Card.Body>
        <Card.Body className="Text">skin_colors: <span>{skin_colors}</span></Card.Body>
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