import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import React from "react";
import "../UI/General.css";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import { Row } from "react-bootstrap";
import RoutineCards from "../UI/Routines/Routines"; 
export default function Routine() {
  return (
    <>
      <Container>
        <Row>
          <h1>Routines</h1>
        </Row>
        <Row>
<RoutineCards />
        </Row>
      </Container>
      <div style={{height:"100px"}}></div>

    </>
  );
}
