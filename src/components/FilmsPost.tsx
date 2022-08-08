import { Card } from "react-bootstrap"
import FavoriteIcon from "@mui/icons-material/Favorite"
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';

type FilmsPostProp = {
    title: string
    episode_id: number
    opening_crawl: string
}

export function FilmsPost({title, episode_id, opening_crawl}:
FilmsPostProp) {
    return <Card>
        <Card.Body className="AppContainer" >
            <Card.Title >
    <span className="fs-2">{title} {episode_id}</span>
            </Card.Title>
    <span className="fs-4">{opening_crawl}</span>
    <div className="like"><FavoriteIcon></FavoriteIcon></div>
    <div className="Favorite"><BookmarkAddIcon></BookmarkAddIcon></div>
        </Card.Body>
    </Card>
}