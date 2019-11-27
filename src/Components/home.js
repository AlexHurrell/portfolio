import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="container-small">
                    <div className="p-5 text-left">
                        <h1>Hi! My name is Alex Hurrell. I am a Software Developer living in Zurich.</h1>
                    </div>
                </div>

                <div className="container-large">
                    <img className="py-5 cover img-fluid" src="/cover.jpg" alt="mountains" />
                </div >

                <div className="container-small">
                    <Row>
                        <Col md={8}>
                            <div className="text-left py-3">
                                <h4 className="pb-3">About:</h4>
                                <p>I am an MEng Electronics Graduate with 3 years experience as a Software Developer at IBM CIC.
                                I recently moved to Zurich to live with my partner. Outside of software I am passionate about running, mountains
                                and the outdoors in general. I am currently working on personal <NavLink className="projects" to="/projects">projects</NavLink> such as TERH, a news and reviews website,
                                                         whilst also searching for the right job. If you would like to get in touch, drop me an email and let's meet up or
                          go for a run.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="text-left py-3">
                                <h4 className="pb-3">Contact:</h4>
                                <div>
                                    <a className="contact" href="https://github.com/AlexHurrell" target="_blank" rel="noopener noreferrer"><i class="fab fa-github pr-1"></i> Github</a>
                                </div>
                                <div>
                                    <a className="contact" href="https://www.linkedin.com/in/alex-f-hurrell" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin pr-1"></i> Linkedln</a>
                                </div>
                                <div>
                                    <a className="contact" href="mailto: alexhurrellcontact@gmail.com"><i class="fas fa-envelope-square pr-1"></i> Email</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div >
        )
    }
}
export default Home