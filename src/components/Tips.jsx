import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';

import Header from './Header';
import Footer from './Footer';

const Tips = () => {
    return(
        <React.Fragment>
            <Header/>
            <section id="tips">
                <Container>
                    <Row>
                        <div className="col-md-12">
                        <h1 className="title text-center my-5">World Health Organization Guidelines for Coronavirus</h1>
                        </div>
                    </Row>
                    <Row>
                        <div className="col-md-6">
                            <Card className="mb-4">
                                <Card.Header><FontAwesomeIcon icon={faHandPointRight}/> Clean your hands frequently</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water. Why? Washing your hands with soap and water or using alcohol-based hand rub kills viruses that may be on your hands.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-6">
                            <Card className="mb-4">
                                <Card.Header><FontAwesomeIcon icon={faHandPointRight}/> Maintain social distancing</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        Maintain at least 1 metre (3 feet) distance between yourself and others. Why? When someone coughs, sneezes, or speaks they spray small liquid droplets from their nose or mouth which may contain virus. If you are too close, you can breathe in the droplets, including the COVID-19 virus if the person has the disease.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-6">
                            <Card className="mb-4">
                                <Card.Header><FontAwesomeIcon icon={faHandPointRight}/> Avoid going to crowded places</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        Avoid going to crowded places. Why? Where people come together in crowds, you are more likely to come into close contact with someone that has COIVD-19 and it is more difficult to maintain physical distance of 1 metre (3 feet).
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-6">
                            <Card className="mb-4">
                                <Card.Header><FontAwesomeIcon icon={faHandPointRight}/> Avoid touching eyes, nose and mouth</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        Avoid touching eyes, nose and mouth. Why? Hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus to your eyes, nose or mouth. From there, the virus can enter your body and infect you.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-6">
                            <Card className="mb-4">
                                <Card.Header><FontAwesomeIcon icon={faHandPointRight}/> Follow good respiratory hygiene</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        Make sure you, and the people around you, follow good respiratory hygiene. This means covering your mouth and nose with your bent elbow or tissue when you cough or sneeze. Then dispose of the used tissue immediately and wash your hands. Why? Droplets spread virus. By following good respiratory hygiene, you protect the people around you from viruses such as cold, flu and COVID-19.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-6">
                            <Card className="mb-4">
                                <Card.Header><FontAwesomeIcon icon={faHandPointRight}/> Stay home and self-isolate</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        Stay home and self-isolate even with minor symptoms such as cough, headache, mild fever, until you recover. Have someone bring you supplies. If you need to leave your house, wear a mask to avoid infecting others. Why? Avoiding contact with others will protect them from possible COVID-19 and other viruses.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-6">
                            <Card className="mb-4">
                                <Card.Header><FontAwesomeIcon icon={faHandPointRight}/> If you have fever, cough and difficulty breathing, seek medical care early</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        If you have a fever, cough and difficulty breathing, seek medical attention, but call by telephone in advance if possible and follow the directions of your local health authority. Why? National and local authorities will have the most up to date information on the situation in your area. Calling in advance will allow your health care provider to quickly direct you to the right health facility. This will also protect you and help prevent spread of viruses and other infections.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-6">
                            <Card className="mb-4">
                                <Card.Header><FontAwesomeIcon icon={faHandPointRight}/> Cover coughs and sneezes</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        Cover your mouth and nose with a tissue when you cough or sneeze or use the inside of your elbow. Throw used tissues in the trash.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-6">
                            <Card className="mb-4">
                                <Card.Header><FontAwesomeIcon icon={faHandPointRight}/> Wear a facemask if you are sick</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        You should wear a facemask when you are around other people (e.g., sharing a room or vehicle) and before you enter a healthcare provider’s office. If you are not able to wear a facemask (for example, because it causes trouble breathing), then you should do your best to cover your coughs and sneezes, and people who are caring for you should wear a facemask if they enter your room.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-6">
                            <Card className="mb-4">
                                <Card.Header><FontAwesomeIcon icon={faHandPointRight}/> Do not wear a facemask if you arent sick</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        You do not need to wear a facemask unless you are caring for someone who is sick (and they are not able to wear a facemask). Facemasks may be in short supply and they should be saved for caregivers.
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

export default Tips;