import React from 'react';
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <section>
            <Container fluid className="about-section">
                <Container>
                    <ContactForm />
                </Container>
                <Particle />
            </Container>
        </section>

    )
}
export default Contact