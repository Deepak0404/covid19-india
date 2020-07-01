import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenFancy } from '@fortawesome/free-solid-svg-icons';

import Header from './Header';
import Footer from './Footer';

const Updates = () => {
    return(
        <React.Fragment>
            <Header/>
            <section id="tips">
                <Container>
                    <Row>
                        <div className="col-md-12">
                        <h1 className="title text-center my-5">Latest Updates from Ministry of Health and Family Welfare Government of India</h1>
                        </div>
                    </Row>
                    <Row>
                        <div className="col-md-4">
                            <Card className="mb-4">
                                <Card.Header>27.06.2020 <FontAwesomeIcon icon={faPenFancy}/></Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <a href="https://docs.google.com/viewerng/viewer?url=https://www.mohfw.gov.in/pdf/ClinicalManagementProtocolforCOVID19dated27062020.pdf" 
                                        className="underline" target="_blank" rel="noopener noreferrer">  Clinical Management Protocol for COVID-19</a>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-4">
                            <Card className="mb-4">
                                <Card.Header>22.06.2020 <FontAwesomeIcon icon={faPenFancy}/></Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        A/V on COVID Appropriate Behaviours
                                        <a href="https://www.youtube.com/watch?v=GIozNNgMfkI" className="underline" target="_BLANK" rel="noopener noreferrer"> (1/5),</a>
                                        <a href="https://www.youtube.com/watch?v=f1M1cadOhJE" className="underline" target="_BLANK" rel="noopener noreferrer"> (2/5),</a>
                                        <a href="https://www.youtube.com/watch?v=xvq0KhxbPtQ" className="underline" target="_BLANK" rel="noopener noreferrer"> (3/5),</a>
                                        <a href="https://www.youtube.com/watch?v=3nowMYAYHN0" className="underline" target="_BLANK" rel="noopener noreferrer">(4/5) &amp; </a>
                                        <a href="https://www.youtube.com/watch?v=Hr_Q7qo4aPg" className="underline" target="_BLANK" rel="noopener noreferrer"> (5/5)</a>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-4">
                            <Card className="mb-4">
                                <Card.Header>18.06.2020 <FontAwesomeIcon icon={faPenFancy}/></Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <a href="https://docs.google.com/viewerng/viewer?url=https://www.mohfw.gov.in/pdf/updatedAdvisoryformanagingHealthcareworkersworkinginCOVIDandNonCOVIDareasofthehospital.pdf" 
                                        className="underline" target="_blank" rel="noopener noreferrer">  Updated Advisory for managing Health care workers working in COVID and Non-COVID areas of the hospital </a>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-4">
                            <Card className="mb-4">
                                <Card.Header>18.06.2020 <FontAwesomeIcon icon={faPenFancy}/></Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <a href="https://youtu.be/8I5xaKLhwBE" 
                                        className="underline" target="_blank" rel="noopener noreferrer">  Video on Addressing Psychosocial Concerns of Healthcare Workers</a>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-4">
                            <Card className="mb-4">
                                <Card.Header>18.06.2020 <FontAwesomeIcon icon={faPenFancy}/></Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <a href="https://docs.google.com/viewerng/viewer?url=https://www.mohfw.gov.in/pdf/Illustrativeguidelineupdate.pdf" 
                                        className="underline" target="_blank" rel="noopener noreferrer">  An Illustrative Guide on COVID Appropriate Behaviours</a>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Row>
                </Container>
            </section>
            <Footer/>
        </React.Fragment>
    )
}

export default Updates;