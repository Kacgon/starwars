import { Card } from "react-bootstrap"
import FavoriteIcon from "@mui/icons-material/Favorite"
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';

type StarshipsPostProp = {
    name: string
    model: string
    manufacturer: string
    cost: number
}

function HeartFunc() {
    alert ('działa like')
}

function FavFunc() {
    alert ('działa fav')
}


export function StarshipsPost({
    name, model, manufacturer,
    cost}:
StarshipsPostProp) {
    return <Card>
        <Card.Body className="AppContainer">
            <Card.Title >
    <span className="fs-2">{name}</span>
            </Card.Title>
        <Card.Body className="fs-4">model: <span>{model}</span></Card.Body>
        <Card.Body className="fs-4">manufacturer: <span>{manufacturer}</span></Card.Body>
        <Card.Body className="fs-4">cost: <span >{cost}</span></Card.Body>
        <div className="like"><FavoriteIcon onClick={HeartFunc}></FavoriteIcon></div>
        <div className="Favorite"><BookmarkAddIcon onClick={FavFunc}></BookmarkAddIcon></div>
        </Card.Body>
    </Card>
}