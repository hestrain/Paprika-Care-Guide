import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import InfoCards from "../UI/PappyInfo/Info"

export default function Other() {
  return (
    <>
    <Container>
<InfoCards />
    </Container>
    <div style={{height:"100px"}}></div>
    </>
  );
}
