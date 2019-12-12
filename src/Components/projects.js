import React from 'react';
import data from '../data.js'
import { Helmet } from 'react-helmet'
import { Card } from 'react-bootstrap'

class projects extends React.Component {

    render() {
        return (
            <div>
                <Helmet>
                    <meta name="description" content="Latest Projects: Personal, Work and University" />
                </Helmet>

                <div className="container-small ">
                    <div className="p-5 text-left">
                        <h1>Latest Projects: Personal, Work and University </h1>
                    </div>
                </div>

                <hr />

                <div className="container p-5">
                    {data.map((item, i) => {
                        return (
                            <div className={i !== data.length - 1 ? "pb-5 text-left" : "text-left"} key={i}>
                                < Card className="none">
                                    <Card.Img variant="top" className="limit img-border" src={item.src} />
                                    <Card.Body>
                                        <Card.Title className="mb-0">
                                            <b>
                                                <span style={{ color: "#f58231" }}>
                                                    <b>
                                                        {item.type + ": "}
                                                    </b>
                                                </span>
                                                {item.title}
                                            </b>
                                        </Card.Title>
                                        <small>
                                            <a href={item.url} target="_blank" rel="noopener noreferrer" >
                                                {item.url}
                                            </a>
                                        </small>
                                        <Card.Text className="mt-3">
                                            {item.teaser}
                                        </Card.Text>

                                        <p><small className="text-muted">{item.technologies}</small></p>

                                    </Card.Body>
                                </Card>
                                {i !== data.length - 1 ? <hr /> : ""}
                            </div>


                        )
                    }
                    )
                    }
                </div>
            </div >
        )
    }
}
export default projects