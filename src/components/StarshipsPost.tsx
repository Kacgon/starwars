import { Card } from "react-bootstrap"
import FavoriteIcon from "@mui/icons-material/Favorite"
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import { ref, set, push } from "firebase/database";
import {user} from '../pages/HomePage'
import {db} from './Firebase'

type StarshipsPostProp = {
    name: string
    model: string
    manufacturer: string
    cost: number
}



const addToDatabase = (name: string) => {
    push(ref(db, 'starships/liked'), {
        "name": name, 
        user,
})    
}

const addFav = (name: string) => {
    push(ref(db, 'starships/faved'), {
    "name": name, 
    user
})    
}


export function StarshipsPost({
    name, model, manufacturer,
    }:
StarshipsPostProp) {
    return <Card>
        <Card.Body className="AppContainer">
            <Card.Title >
    <span className="fs-2">{name}</span>
            </Card.Title>
        <Card.Body className="fs-4">model: <span>{model}</span></Card.Body>
        <Card.Body className="fs-4">manufacturer: <span>{manufacturer}</span></Card.Body>
        <div className="like"><FavoriteIcon onClick={() => addToDatabase(name)}></FavoriteIcon></div>
        <div className="Favorite"><BookmarkAddIcon onClick={() => addFav(name)}></BookmarkAddIcon></div>
        </Card.Body>
    </Card>
}