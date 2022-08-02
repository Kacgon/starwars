import { Card } from "react-bootstrap"

type VechiclesPostProp = {
    name: string
    model: string
    manufacturer: string
    cost: number
}

export function VechiclesPost({
    name, model, manufacturer,
    cost}:
VechiclesPostProp) {
    return <Card>
        <Card.Body className="AppContainer">
            <Card.Title >
    <span className="fs-2">{model}</span>
            </Card.Title>
        <Card.Body className="fs-4">model: <span>{model}</span></Card.Body>
        <Card.Body className="fs-4">manufacturer: <span>{manufacturer}</span></Card.Body>
        <Card.Body className="fs-4">cost: <span >{cost}</span></Card.Body>
        <div className="like">like</div>
        <div className="Favorite">heart</div>
        </Card.Body>
    </Card>
}