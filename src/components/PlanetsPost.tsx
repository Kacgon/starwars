import { Card } from "react-bootstrap"
import FavoriteIcon from "@mui/icons-material/Favorite"
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import { ref, set, push } from "firebase/database";
import {user} from '../pages/HomePage'
import {db} from './Firebase'

type PlanetsPostProp = {
    name: string
    rotation_period: number
    orbital_period: number
    diameter:number
    climate: string
}

const addToDatabase = (name: string) => {
    push(ref(db, 'liked/planets/' +user), {
        "name": name, 
        user,
})    
}

const addFav = (name: string) => {
    push(ref(db, '/faved/planets/' +user), {
    "name": name, 
    user
})    
}


export function PlanetsPost({
    name, rotation_period, orbital_period,
    diameter,climate}:
    PlanetsPostProp) 
    {
    return <Card>
        <Card.Body className="AppContainer">
            <Card.Title >
    <span className="fs-2">{name}</span>
            </Card.Title>
        <Card.Body className="fs-4">rotation_period: <span>{rotation_period}</span></Card.Body>
        <Card.Body className="fs-4">orbital_period: <span>{orbital_period}</span></Card.Body>
        <Card.Body className="fs-4">diameter: <span >{diameter}</span></Card.Body>
        <Card.Body className="fs-4">climate: <span>{climate}</span></Card.Body>
        <div className="like"><FavoriteIcon onClick={() => addToDatabase(name)}></FavoriteIcon></div>
        <div className="Favorite"><BookmarkAddIcon onClick={() => addFav(name)}></BookmarkAddIcon></div>
        </Card.Body>
    </Card>
}