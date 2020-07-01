import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const HelpCard = () => {
    return(
        <section id="helpCard">
            <Container>
                <Row>
                    <div className="offset-md-3 col-md-6">
                        <div className="items-list rounded mb-4 p-3">
                            <Row>
                                <div className="col-4 text-center">
                                    <div className="item">
                                        <Link to="/updates">
                                            <img src={require("../img/virus_icon.png")} alt="virus icon" 
                                            className="img-fluid rounded mb-2" width="80" />
                                        </Link>
                                        <div className="item-body">
                                            <h5 className="font-weight-light m-0">COVID-19 Latest Updates</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 text-center">
                                    <div className="item">
                                        <Link to="/tips">
                                            <img src={require("../img/avatar_mask_icon.png")} alt="avatar mask icon" 
                                            className="img-fluid rounded mb-2" width="80" />
                                        </Link>
                                        <div className="item-body">
                                            <h5 className="font-weight-light m-0">COVID-19 Awareness Info</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 text-center">
                                    <div className="item">
                                        <a href="https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en_IN" target="_blank" rel="noopener noreferrer">
                                            <img src={require("../img/aarogya_setu_app.png")} alt="aarogya setu app" 
                                            className="img-fluid rounded mb-2" width="80" />
                                        </a>
                                        <div className="item-body">
                                            <h5 className="font-weight-light m-0">Download Aarogya Setu APP</h5>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default HelpCard;