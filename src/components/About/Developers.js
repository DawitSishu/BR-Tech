import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import dave from "./dev-team/dave.jpg";
import zola from "./dev-team/zola.jpg";
import giant from "./dev-team/bereketab.jpg";

const Developers = () => {
    return (
        <Container >
            <Row>
                <Col className="tech-icons">
                    <img variant="top" src={dave} style={{ width: '18rem', height: '18rem' }} /><br />
                    <h1>Dawit Alemayehu</h1>
                    <h6>Front-end React devloper and <br/> System Architect </h6>
                </Col>
                {/* <Col className="tech-icons">
                    <img variant="top" src={zola} style={{ width: '18rem', height: '18rem' }} /><br />
                    <h1>Zelalem Yohannes</h1>
                    <h6>Front-end and <br /> Pyhton devloper</h6>
                </Col>
                <Col className="tech-icons">
                    <img variant="top" src={giant} style={{ width: '18rem', height: '18rem' }} /><br />
                    <h1>Bereketab Birhanu</h1>
                    <h6>Pyhton devloper and <br /> css specialist</h6>
                </Col> */}
            </Row>
        </Container>
    )
}
export default Developers;