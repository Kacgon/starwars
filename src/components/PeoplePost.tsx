import { Card } from "react-bootstrap"
import FavoriteIcon from "@mui/icons-material/Favorite"
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import {db} from './Firebase'
import { ref, push, remove, update } from "firebase/database";
import {user} from '../pages/HomePage'
import { useState } from "react";
import {GetAllFavedPeople, GetAllLikesPeople} from "../components/Firebase"

export type PeoplePostProp = {
    name: string
    height: number
    mass: number
    hair_color:string
    skin_color: string
}


const addLike = (name: string) => {
    push(ref(db,"likedPeople/people/ " +name ), {
        user, 
        
})    
}


const addFav = (name: string) => {
    push(ref(db,"favedPeople/people/ " +name ), {
    user,
    
})    
}


export function PeoplePost({name, height, mass, hair_color,skin_color}:
PeoplePostProp) {

    const[fav, setFav] = useState(false);
    const favToggle=()=> {
    setFav(!fav);
}
    const[like, setlike] = useState(false);
    const likeToggle=()=> {
    setlike(!like);
}

const DelFaved = () => {
    remove(ref(db,"favedPeople/people/ " +name ), 
    )
}
const DelLiked = () => {
    remove(ref(db,"likedPeople/people/ " +name ), 
    )
}
function DelFavHandler() {
    DelFaved()
    GetAllFavedPeople()
}

function DelLikeHandler() {
    DelLiked()
    GetAllLikesPeople()
}

function FavHandler() {
    favToggle()
    addFav(name)
    GetAllFavedPeople()
}

function LikeHandler() {
    likeToggle()
    addLike(name)
    GetAllLikesPeople()
}

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