import { Card } from "react-bootstrap"
import FavoriteIcon from "@mui/icons-material/Favorite"
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import { ref,push } from "firebase/database";
import {user} from '../pages/HomePage'
import {db} from './Firebase'

type FilmsPostProp = {
    title: string
    episode_id: number
    opening_crawl: string
}

const addToDatabase = (title: string) => {
    push(ref(db, 'films/liked'), {
        "title": title, 
        user,
})    
}

const addFav = (title: string) => {
    push(ref(db, 'films/faved'), {
    "title": title, 
    user
})    
}


export function FilmsPost({title, episode_id, opening_crawl}:
FilmsPostProp) {
    return <Card>
        <Card.Body className="AppContainer" >
            <Card.Title >
    <span className="fs-2">{title} {episode_id}</span>
            </Card.Title>
    <span className="fs-4">{opening_crawl}</span>
    <div className="like"><FavoriteIcon onClick={() => addToDatabase(title)}></FavoriteIcon></div>
        <div className="Favorite"><BookmarkAddIcon onClick={() => addFav(title)}></BookmarkAddIcon></div>
        </Card.Body>
    </Card>
}