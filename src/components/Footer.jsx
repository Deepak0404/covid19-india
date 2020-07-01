import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Footer = () => {
    return (
        <footer className="bg-dark py-3">
            <Container>
                <Row className="mb-2">
                    <div className="col-md-6 text-md-left text-center">
                        <ul className="helpline">
                            <li>Helpline Number : <a href="tel:+91-11-23978046">+91-11-23978046</a></li>
                            <li>Toll Free : <a href="tel:1075">1075</a></li>
                            <li>Helpline Email ID : <a href="mailto:ncov2019@gov.in">ncov2019@gov.in</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 text-md-right text-center">
                        <ul className="share">
                            <li>Share @</li>
                            <li className="facebook">
                                <a href="https://www.facebook.com/sharer/sharer.php?u=covid19-tracker.in" target="_blank" rel="noopener noreferrer">
                                    <img src={require("../img/facebook.png")} alt="facebook icon" width="30px" />
                                </a>
                            </li>
                            <li className="twitter">
                                <a className="twitter-share-button"
                                    href="https://twitter.com/share?url=https://www.covid19-tracker.in&text=Track Coronavirus Cases in India State Wise here" target="_blank" rel="noopener noreferrer">
                                    <img src={require("../img/twitter.png")} alt="twitter icon" width="30px" />
                                </a>
                            </li>
                            <li className="whatsapp">
                                <a href="https://api.whatsapp.com/send?text=Track Coronavirus Cases in India state Wise at https://www.covid19-tracker.in" data-action="share/whatsapp/share" target="_blank" rel="noopener noreferrer">
                                    <img src={require("../img/whatsapp.png")} alt="Whatsapp icon" width="30px" />
                                </a>
                            </li>
                        </ul>
                        <p className="mb-0">Designed & Developed by <a href="https://www.linkedin.com/in/deepak-saini-1303a135/" target="_blank" rel="noopener noreferrer">Deepak Saini</a></p>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeeaeahtHE47Vqaeh9izpMeU5gJrWrSLfLZ0XO1X0RPEkkFnQ/viewform"
                            target="_blank" rel="noopener noreferrer">Feedback and Suggestions</a>
                    </div>
                </Row>
                <p className="m-0 text-md-left text-center font-italic">Disclaimer : Data Sources are based on Various Websites, data accuracy may be affected. We are continuously monitoring related Websites, for regular updates on cases counts.</p>
            </Container>
        </footer>
    )
}

export default Footer;