import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import axios from 'axios';
import ProductHero from './ProductHero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faViruses, faHeartbeat, faUserTimes, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import NumberFormat from 'react-number-format';

const Cards = () => {
    const [latest, setLatest] = useState([]);

    useEffect(() => {
        axios
            .get('https://api.covid19india.org/data.json')
            .then(response => {
                // console.log(response.data.statewise[0]);
                setLatest(response.data.statewise[0]);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    return (
        <React.Fragment>
        <ProductHero time={latest.lastupdatedtime}/>
        <section id="cards">
            <Container>
                <CardDeck className="text-center text-white mx-0">
                    <Row>
                        <div className="col-xl-3 col-6">
                            <Card className="bg-primary mx-0 mb-4">
                                <Card.Header>Total Infected <FontAwesomeIcon icon={faViruses}/></Card.Header>
                                <Card.Body>
                                    <Card.Title>
                                        <span className="count" id="totalConfirmed">
                                            <NumberFormat 
                                                value={latest.confirmed} 
                                                thousandSeparator={true} 
                                                thousandsGroupStyle="lakh"
                                                displayType={'text'} />
                                        </span>
                                        <sub>[+<span id="deltaConfirmed">
                                            <NumberFormat 
                                                value={latest.deltaconfirmed} 
                                                thousandSeparator={true} 
                                                thousandsGroupStyle="lakh"
                                                displayType={'text'} />
                                            </span>]</sub>
                                    </Card.Title>
                                    <Card.Text>
                                        Number of confirmed cases of COVID-19
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-xl-3 col-6">
                            <Card className="bg-success mx-0 mb-4">
                                <Card.Header>Total Recovered <FontAwesomeIcon icon={faHeartbeat}/></Card.Header>
                                <Card.Body>
                                    <Card.Title>
                                        <span className="count" id="totalRecovered">
                                            <NumberFormat 
                                                value={latest.recovered} 
                                                thousandSeparator={true} 
                                                thousandsGroupStyle="lakh"
                                                displayType={'text'} />
                                        </span>
                                        <sub>[+<span id="deltaRecovered">
                                            <NumberFormat 
                                                value={latest.deltarecovered} 
                                                thousandSeparator={true} 
                                                thousandsGroupStyle="lakh" 
                                                displayType={'text'} />
                                            </span>]</sub>
                                    </Card.Title>
                                    <Card.Text>
                                        Number of recoveries from COVID-19
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-xl-3 col-6">
                            <Card className="bg-danger mx-0 mb-4">
                                <Card.Header>Total Deceased <FontAwesomeIcon icon={faUserTimes}/></Card.Header>
                                <Card.Body>
                                    <Card.Title>
                                        <span className="count" id="totalDeaths">
                                            <NumberFormat 
                                                value={latest.deaths} 
                                                thousandSeparator={true} 
                                                thousandsGroupStyle="lakh"
                                                displayType={'text'} />
                                        </span>
                                        <sub>[+<span id="deltaDeaths">
                                            <NumberFormat 
                                                value={latest.deltadeaths} 
                                                thousandSeparator={true} 
                                                thousandsGroupStyle="lakh"
                                                displayType={'text'} />
                                            </span>]</sub>
                                    </Card.Title>
                                    <Card.Text>
                                        Number of deaths caused by COVID-19
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-xl-3 col-6">
                            <Card className="bg-info mx-0 mb-4">
                                <Card.Header>Total Active <FontAwesomeIcon icon={faLightbulb}/></Card.Header>
                                <Card.Body>
                                    <Card.Title>
                                        <span className="count" id="totalConfirmed">
                                            <NumberFormat 
                                                value={latest.active} 
                                                thousandSeparator={true} 
                                                thousandsGroupStyle="lakh"
                                                displayType={'text'} />
                                        </span>
                                    </Card.Title>
                                    <Card.Text>
                                        Number of active cases of COVID-19
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Row>
                </CardDeck>
            </Container>
        </section>
        </React.Fragment>
    );
};

export default Cards;
