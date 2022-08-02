import { Card } from "react-bootstrap"

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
    <span className="fs-2">{title}  {episode_id}</span>
            </Card.Title>
    <span className="fs-4">{opening_crawl}</span>
        </Card.Body>
    </Card>
}