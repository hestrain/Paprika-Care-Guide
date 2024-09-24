import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import React from "react";
import ListCards from "../UI/List/List";
import { Card } from "react-bootstrap";
export default function Help() {
  return (
    <Container>
      <Row>
        <h1>
          Help! What do I do? 
          <img style={{width:"110px"}}
        src="/images/paprika on her way2.png"
        alt="a dachshund running">
          </img>
          </h1>
        <h3>Some basic tips for meeting Paprika's Needs </h3>
      </Row> 
      <Row>
<ListCards />
      </Row>
      
      <Row style={{marginTop:"15px"}}>
        <Card>

        <Card.Title>Locations</Card.Title>
        <a href="/locations">Where Is All This Shit</a>
        </Card>
      </Row>
      <Row ></Row>
      <div style={{height:"100px"}}></div>
    </Container>
  );
}
