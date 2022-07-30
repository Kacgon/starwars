import { Avatar } from "@material-ui/core"
import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap" 
import { NavLink } from "react-router-dom"
import {collection} from 'firebase/firestore'
import { logout } from "./Firebase"

export function Navbar() {
    return <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
        <Container>
            <Nav className="me-auto">
                <Nav.Link to="/" as={NavLink}>HomePage</Nav.Link>
                <Nav.Link to="/Films" as={NavLink}>Films</Nav.Link>
                <Nav.Link to="/People" as={NavLink}>People</Nav.Link>
                <Nav.Link to="/Species" as={NavLink}>Species</Nav.Link>
                <Nav.Link to="/Planets" as={NavLink}>Planets</Nav.Link>
                <Nav.Link to="/Starships" as={NavLink}>Starships</Nav.Link>
                <Nav.Link to="/Vechicle" as={NavLink}>Vechicle</Nav.Link>
                
            </Nav>
            <Nav>
            <Avatar></Avatar>
            <Nav.Link to="/NewAcc" as={NavLink}> Log In</Nav.Link>      
            </Nav>
            <Button onClick={logout}>Log Out</Button>
        </Container>
    </NavbarBs>
}