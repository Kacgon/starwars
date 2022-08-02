import { Card } from "react-bootstrap"

type SpeciesPostProp = {
    name: string
    classification: string
    designation: string
    average_height:string
    skin_colors: string
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
        </Card.Body>
    </Card>
}