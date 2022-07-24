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
        <Card.Body >
            <Card.Title >
    <span className="fs-2">{name}</span>
            </Card.Title>
        <Card.Body className="fs-4">height: <span>{height}</span></Card.Body>
        <Card.Body className="fs-4">mass: <span>{mass}</span></Card.Body>
        <Card.Body className="fs-4">hair_color: <span >{hair_color}</span></Card.Body>
        <Card.Body className="fs-4">skin_color: <span>{skin_color}</span></Card.Body>
        </Card.Body>
    </Card>
}