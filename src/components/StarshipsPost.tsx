import { Card } from "react-bootstrap"

type StarshipsPostProp = {
    name: string
    model: string
    manufacturer: string
    cost: number
}

export function StarshipsPost({
    name, model, manufacturer,
    cost}:
StarshipsPostProp) {
    return <Card>
        <Card.Body >
            <Card.Title >
    <span className="fs-2">{name}</span>
            </Card.Title>
        <Card.Body className="fs-4">model: <span>{model}</span></Card.Body>
        <Card.Body className="fs-4">manufacturer: <span>{manufacturer}</span></Card.Body>
        <Card.Body className="fs-4">cost: <span >{cost}</span></Card.Body>
        </Card.Body>
    </Card>
}