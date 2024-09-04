import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import React from "react";
import TrickCards from "../UI/TrickStuff/Tricks";

export default function Tricks () {
    return (
        <Container>
            <Row><h1>Trick List & Instructions</h1></Row>
            <Row>
                <TrickCards />
            </Row>
        </Container>
    )
}

