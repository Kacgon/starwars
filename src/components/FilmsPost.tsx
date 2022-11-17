import { Card } from "react-bootstrap"
import FavoriteIcon from "@mui/icons-material/Favorite"
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import { ref,push, remove } from "firebase/database";
import {user} from '../pages/HomePage'
import {db} from './Firebase'
import { useState } from "react";
import {GetAllFavedFilms, GetAllLikesFilms} from "../components/Firebase"

export type FilmsPostProp = {
    title: string
    episode_id: number
    opening_crawl: string
}

const addLike = (title: string) => {
    push(ref(db,"likedFilms/films/ " +title ), {
        user, 
        
})    
}

const addFav = (title: string) => {
    push(ref(db,"favedFilms/films/ " +title ), {
    user,
    
})    
}


export function FilmsPost({title, episode_id, opening_crawl}:
FilmsPostProp) {

    const[fav, setFav] = useState(false);
    const favToggle=()=> {
    setFav(!fav);
}
    const[like, setlike] = useState(false);
    const likeToggle=()=> {
    setlike(!like);
}

const DelFaved = () => {
    remove(ref(db,"favedFilms/films/ " +title ), 
    )
}
const DelLiked = () => {
    remove(ref(db,"likedFilms/films/ " +title ), 
    )
}


const[liked, setLiked] = useState(true);
function LikeHandler() {
    if (liked == true) {
        likeToggle()
        addLike(title)
        GetAllLikesFilms()
        setLiked(!liked)
        
    } else {
        DelLiked()
        GetAllLikesFilms()
        likeToggle()
        setLiked(!liked)
        
    }
} 

const[faved, setFaved] = useState(true);
function FavoriteHandler() {
    if (faved == true) {
        favToggle()
        addFav(title)
        GetAllFavedFilms()
        setFaved(!faved)
    } else {
        DelFaved()
        GetAllFavedFilms()
        favToggle()
        setFaved(!faved)
    }
}
    return <Card>
        <Card.Body className="AppContainer" >
            <Card.Title >
    <span className="Text">{title} {episode_id}</span>
            </Card.Title>
        <Card.Body className="Text">Title: <span>{title}</span></Card.Body>
        <Card.Body className="Text">Episode Id: <span>{episode_id}</span></Card.Body>
        <Card.Body className="Text">Opening Crawl: <span >{opening_crawl}</span></Card.Body>        
        <div className="like">
        <FavoriteIcon onClick={LikeHandler} className={'toggle-unliked ' + (like ? 'toggle-liked':'')} 
        ></FavoriteIcon>
        </div>
        <div className="Favorite">
        <BookmarkAddIcon onClick={FavoriteHandler} className={'toggle-unfaved' + (fav ? 'toggle-faved':'')}
        ></BookmarkAddIcon>
        </div>
        </Card.Body>
    </Card>
}