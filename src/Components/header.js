import React from 'react';
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="container pt-4 pb-4">
            <Navbar expand="md">
                <NavLink to="/">
                    <Navbar.Brand style={{ "border": "4px solid black" }}>
                        <div className="wrapper">
                            <div styled="display: inline;">
                                <span className="letter" style={{ "float": "left", }}>A</span>
                            </div>
                            <div styled="display: inline;">
                                <span className="letter" style={{ "float": "left" }}>H</span>
                            </div>
                        </div>
                    </Navbar.Brand>
                </NavLink>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <NavLink to="/projects">
                            <Navbar.Text className="mr-4">
                                Projects
                        </Navbar.Text>
                        </NavLink>
                        <Navbar.Text>
                            <a href="mailto: alexhurrellcontact@gmail.com">alexhurrellcontact@gmail.com</a>
                        </Navbar.Text>
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        </nav >
    );
}

export default Header;

