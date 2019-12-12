import React from 'react';
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="container pt-4 pb-4">
            <Navbar expand="sm" collapseOnSelect>
                <Nav.Link eventKey="1" as={NavLink} to="/" style={{ "padding-left": 0 }}>
                    <Navbar.Brand style={{ "border": "4px solid black" }}>
                        <div className="header">
                            <div styled="display: inline;">
                                <span className="letter" style={{ "float": "left", }}>A</span>
                            </div>
                            <div styled="display: inline;">
                                <span className="letter" style={{ "float": "left" }}>H</span>
                            </div>
                        </div>
                    </Navbar.Brand>
                </Nav.Link>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link eventKey="2" as={NavLink} to="/projects">
                            <Navbar.Text className="mr-4">
                                Projects
                            </Navbar.Text>
                        </Nav.Link>
                        <Nav.Link>
                            <Navbar.Text>
                                <a href="mailto: alexhurrellcontact@gmail.com">alexhurrellcontact@gmail.com</a>
                            </Navbar.Text>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        </nav >
    );
}

export default Header;


