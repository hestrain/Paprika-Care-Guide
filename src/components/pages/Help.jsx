import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
// import Test from "./Test";
import React from "react";
import BoneCards from "../UI/BoneStuff/Bones";
import Form from "react-bootstrap/Form";
import ListCards from "../UI/List/List";
import { Accordion } from "react-bootstrap";

export default function Help() {
  return (
    <Container>
      <Row>
        <h1>Help! What do I do?</h1>
        <h3>Some tips for meeting Paprika's Needs</h3>
      </Row> 
      <Row>
<ListCards />
      </Row>
      <Row style={{marginTop:"15px"}}>
        <h3 id="#bones">The Bones</h3>
        <Accordion>
          <Accordion.Header>Click to See Them</Accordion.Header>
          <Accordion.Body>

        <BoneCards />
          </Accordion.Body>
        </Accordion>
      </Row>
      <Row></Row>
    </Container>
  );
}
