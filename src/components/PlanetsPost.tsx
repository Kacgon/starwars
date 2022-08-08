import { Card } from "react-bootstrap"
import FavoriteIcon from "@mui/icons-material/Favorite"
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';

type PlanetsPostProp = {
    name: string
    rotation_period: number
    orbital_period: number
    diameter:number
    climate: string
}

export function PlanetsPost({
    name, rotation_period, orbital_period,
    diameter,climate}:
PlanetsPostProp) {
    return <Card>
        <Card.Body className="AppContainer">
            <Card.Title >
    <span className="fs-2">{name}</span>
            </Card.Title>
        <Card.Body className="fs-4">rotation_period: <span>{rotation_period}</span></Card.Body>
        <Card.Body className="fs-4">orbital_period: <span>{orbital_period}</span></Card.Body>
        <Card.Body className="fs-4">diameter: <span >{diameter}</span></Card.Body>
        <Card.Body className="fs-4">climate: <span>{climate}</span></Card.Body>
        <div className="like"><FavoriteIcon></FavoriteIcon></div>
        <div className="Favorite"><BookmarkAddIcon></BookmarkAddIcon></div>
        </Card.Body>
    </Card>
}