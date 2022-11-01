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

function DelFavHandler() {
    DelFaved()
    GetAllFavedFilms()
}

function DelLikeHandler() {
    DelLiked()
    GetAllLikesFilms()
}

function FavHandler() {
    favToggle()
    addFav(title)
    GetAllFavedFilms()
}

function LikeHandler() {
    likeToggle()
    addLike(title)
    GetAllLikesFilms()
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