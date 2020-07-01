import React from 'react';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const ProductHero = ({time}) => {
    return(
        <section id="hero">
            <Container className="text-center">
                <img
                    src={require("../img/covid19-logo.png")}
                    alt="covid19-logo"
                    width="300"
                    height="75"
                    className="img-fluid mx-auto my-3 covid19-logo"
                />
                <h1 className="mt-2 w-100 font-weight-normal">COVID-19 Live Updates in India</h1>
                <p className="mb-4 w-100">Last Updated: <FontAwesomeIcon icon={faCalendarAlt}/> {time}</p>
            </Container>
        </section>
    )
}

export default ProductHero;