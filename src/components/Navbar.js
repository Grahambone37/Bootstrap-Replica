import Container from "react-bootstrap/Container"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'

export default function NavbarDiv() {
    return (
        <Navbar style={{
            backgroundColor: '#09624B'
        }}>
            <Container>
                <Navbar.Brand href="#home" >
                    <img src="https://www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-dark-2b8dee8274bcb04feef4d8baed4b3b0258a0ce4f8a731d3c12f36472d57f02b9.svg" alt="Instacart Logo" />
                </Navbar.Brand>
                <Nav style={{
                    flexDirection: 'row'
                }}>
                    <Nav.Link href="#Login" style={{color: 'white'}}>Log in</Nav.Link>
                    <Button style={{
                        backgroundColor: '#0AAD0A',
                        border: 'none',
                        borderRadius: 50
                    }}>Sign up</Button>
                </Nav>
            </Container>
        </Navbar>
    )
}