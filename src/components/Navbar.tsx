import { Avatar } from "@material-ui/core"
import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap" 
import { NavLink } from "react-router-dom"
import {collection} from 'firebase/firestore'
import { logout, signIn } from "./Firebase"
import '../main.scss';


export function Navbar() {
    return <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
        <Container>
            <Nav className="me-auto">
                <Nav.Link className="NavLink" to="/" as={NavLink}>HomePage</Nav.Link>
                <Nav.Link className="NavLink" to="/Films" as={NavLink}>Films</Nav.Link>
                <Nav.Link className="NavLink" to="/People" as={NavLink}>People</Nav.Link>
                <Nav.Link className="NavLink" to="/Species" as={NavLink}>Species</Nav.Link>
                <Nav.Link className="NavLink" to="/Planets" as={NavLink}>Planets</Nav.Link>
                <Nav.Link className="NavLink" to="/Starships" as={NavLink}>Starships</Nav.Link>
                <Nav.Link className="NavLink" to="/Vechicle" as={NavLink}>Vechicle</Nav.Link>
            </Nav>
            <Nav>
            <Avatar src={localStorage.getItem("avatar") as string}/>
            <Nav.Link className="NavLink" to="/NewAcc" as={NavLink}> Profile</Nav.Link>      
            </Nav>
            <Button className="LogOut" onClick={logout}>Log Out</Button>
        </Container>
    </NavbarBs>
}