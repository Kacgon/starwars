import { Card } from "react-bootstrap"
import FavoriteIcon from "@mui/icons-material/Favorite"
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import { push, ref, set } from "firebase/database";
import {user} from '../pages/HomePage'
import {db} from './Firebase'

type SpeciesPostProp = {
    name: string
    classification: string
    designation: string
    average_height:string
    skin_colors: string
}

const addToDatabase = (name: string) => {
    push(ref(db, 'species/liked'), {
        "name": name, 
        user,
})    
}

const addFav = (name: string) => {
    push(ref(db, 'species/faved'), {
    "name": name, 
    user
})    
}


export function SpeciesPost({
    name, classification, designation,
    average_height,skin_colors}:
SpeciesPostProp) {
    return <Card>
        <Card.Body className="AppContainer">
            <Card.Title >
    <span className="fs-2">{name}</span>
            </Card.Title>
        <Card.Body className="fs-4">classification: <span>{classification}</span></Card.Body>
        <Card.Body className="fs-4">designation: <span>{designation}</span></Card.Body>
        <Card.Body className="fs-4">average_height: <span >{average_height}</span></Card.Body>
        <Card.Body className="fs-4">skin_colors: <span>{skin_colors}</span></Card.Body>
        <div className="like"><FavoriteIcon onClick={() => addToDatabase(name)}></FavoriteIcon></div>
        <div className="Favorite"><BookmarkAddIcon onClick={() => addFav(name)}></BookmarkAddIcon></div>
        </Card.Body>
    </Card>
}