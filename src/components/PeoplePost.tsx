import { Card } from "react-bootstrap"

type PeoplePostProp = {
    name: string
    height: number
    mass: number
    hair_color:string
    skin_color: string
}

export function PeoplePost({name, height, mass, hair_color,skin_color}:
PeoplePostProp) {
    return <Card>
        <Card.Body className="AppContainer" >
            <Card.Title >
    <span className="Text">{name}</span>
            </Card.Title>
        <Card.Body className="Text">height: <span>{height}</span></Card.Body>
        <Card.Body className="Text">mass: <span>{mass}</span></Card.Body>
        <Card.Body className="Text">hair_color: <span >{hair_color}</span></Card.Body>
        <Card.Body className="Text">skin_color: <span>{skin_color}</span></Card.Body>
        <div className="like">like</div>
        <div className="Favorite">heart</div>
        </Card.Body>
    </Card>
}