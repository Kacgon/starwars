import { Card } from "react-bootstrap"
import FavoriteIcon from "@mui/icons-material/Favorite"
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import { ref, set, push, remove } from "firebase/database";
import {user} from '../pages/HomePage'
import {db} from './Firebase'
import { useState } from "react";
import {GetAllFavedVechicle, GetAllLikesVechicle} from "../components/Firebase"

type VechiclesPostProp = {
    name: string
    model: string
    manufacturer: string
    cost: number
}

const addLike = (name: string) => {
    push(ref(db,user+ "/likedVechicle/vechicle/ " +name ), {
        user, 
        
})    
}


const addFav = (name: string) => {
    push(ref(db,user+ "/favedVechicle/vechicle/ " +name ), {
    user,
    
})    
}


export function VechiclesPost({
    name, model, manufacturer,
    cost}:
VechiclesPostProp) 
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
    remove(ref(db,user+ "/favedVechicle/vechicle/ " +name ), 
    )
}
const DelLiked = () => {
    remove(ref(db,user+ "/likedVechicle/vechicle/ " +name ), 
    )
}
function DelFavHandler() {
    DelFaved()
    GetAllFavedVechicle()
}

function DelLikeHandler() {
    DelLiked()
    GetAllLikesVechicle()
}

function FavHandler() {
    favToggle()
    addFav(name)
    GetAllFavedVechicle()
}

function LikeHandler() {
    likeToggle()
    addLike(name)
    GetAllLikesVechicle()
}
    return <Card>
        <Card.Body className="AppContainer">
            <Card.Title >
    <span className="fs-2">{name}</span>
            </Card.Title>
        <Card.Body className="fs-4">model: <span>{model}</span></Card.Body>
        <Card.Body className="fs-4">manufacturer: <span>{manufacturer}</span></Card.Body>
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