import { Card } from "react-bootstrap"
import FavoriteIcon from "@mui/icons-material/Favorite"
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import { ref, set, push, remove } from "firebase/database";
import {user} from '../pages/HomePage'
import {db} from './Firebase'
import { useState } from "react";
import {GetAllFavedStarships, GetAllLikesStarships} from "../components/Firebase"

type StarshipsPostProp = {
    name: string
    model: string
    manufacturer: string
    cost: number
}

const addLike = (name: string) => {
    push(ref(db,"likedStarships/starships/ " +name ), {
        user, 
        
})    
}


const addFav = (name: string) => {
    push(ref(db,"favedStarships/starships/ " +name ), {
    user,
    
})    
}


export function StarshipsPost({name,model,manufacturer,}:StarshipsPostProp) 
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
    remove(ref(db,"favedStarships/starships/ " +name ), 
    )
}
const DelLiked = () => {
    remove(ref(db,"likedStarships/starships/ " +name ), 
    )
}
function DelFavHandler() {
    DelFaved()
    GetAllFavedStarships()
}

function DelLikeHandler() {
    DelLiked()
    GetAllLikesStarships()
}

function FavHandler() {
    favToggle()
    addFav(name)
    GetAllFavedStarships()
}

function LikeHandler() {
    likeToggle()
    addLike(name)
    GetAllLikesStarships()
}

    return <Card>
        <Card.Body className="AppContainer">
            <Card.Title >
    <span className="Text">{name}</span>
            </Card.Title>
        <Card.Body className="Text">model: <span>{model}</span></Card.Body>
        <Card.Body className="Text">manufacturer: <span>{manufacturer}</span></Card.Body>
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