import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Toast } from "react-bootstrap";


const age = () => {
  var m1 = 12;
  var y1 = 2021;  
  var d1 = 17

  var date = new Date();
  var d2 = date.getDate();
  var m2 = 1 + date.getMonth();
  var y2 = date.getFullYear();
  var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if(d1 > d2){
    d2 = d2 + month[m2 - 1];
    m2 = m2 - 1;
  }
  if(m1 > m2){
    m2 = m2 + 12;
    y2 = y2 - 1;
  }

  var m = m2 - m1;
  var y = y2 - y1;
    
  //display the calculated age  
  return(`${y} years, ${m} months`)
}

function InfoCard(props) {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Container>
        <Row>
          {props.information.map((info) => {
            return (
              <Card>
                <Card.Title>
                  <h1>{info.dogName}</h1>
                </Card.Title>
                <Card.Body className="info">
                  <Row>
                    <Col md="6">
                    <h3>General Info</h3>
                  <ul>
                    <li>
                      <strong>Birthday: </strong>
                      {info.birthday} ({age()})
                    </li>
                    <li>
                      <strong>Neutered: </strong>
                      {info.neutered}
                    </li>
                    <li>
                      <strong>Weight: </strong>
                      {info.weight}
                    </li>
                    {/* make this a toast */}
                    {/* */}
                    <Row>
                      <Col md="6">
                        <Button onClick={() => setShow(true)}>
                          Microchip Info ...
                        </Button>
                      </Col>
                      <Col md="6">
                        <Toast
                          onClose={() => setShow(false)}
                          show={show}
                          delay={10000}
                          autohide
                        >
                          <Toast.Header>
                            <img
                              src="holder.js/20x20?text=%20"
                              className="rounded me-2"
                              alt=""
                            />
                            <strong className="me-auto">Microchip Info</strong>
                            <small></small>
                          </Toast.Header>
                          <Toast.Body style={{color:"black"}}>
                            <strong># </strong>
                            {info.microchip.number} <br></br>
                            <strong>Website:</strong>{" "}
                            <a href={info.microchip.website}>
                              {info.microchip.website}
                            </a>
                            <br></br>
                            <strong>Phone:</strong>
                            {info.microchip.phone}
                          </Toast.Body>
                        </Toast>
                      </Col>
                    </Row>

                    {/* */}
                  </ul>
                  <h3>Notes</h3>
                  <ul key={info.id}>
                    {info.notes.map((note) => {
                      return <li key={note.index}>{note}</li>;
                    })}
                  </ul>
                    </Col>
                    <Col md="6">
                  <img src={info.photo}
                  style={{width:"100%"}}
                  ></img>
                    </Col>
                  </Row>
                  
                  
                  <h3>Vets</h3>
                  <Row>
                    {info.vets.map((vet) => {
                      return (
                        <Accordion
                          defaultActiveKey="0"
                          className="accordions"
                          key={vet.id}
                        >
                          <Accordion.Item eventKey={vet.id}>
                            <Accordion.Header>{vet.clinic}</Accordion.Header>
                            <Accordion.Body>
                              <strong>Use For:</strong> <br></br>
                              {vet.reason}
                            </Accordion.Body>
                            <Accordion.Body>
                              <strong>Address: </strong> {vet.address} <br></br>
                              <strong>Phone: </strong> {vet.phone} <br></br>
                              <strong>Notes: </strong> {vet.notes}
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      );
                    })}
                  </Row>
                  <br></br>
                  <Row> 
                    <h3>Emergency Contacts</h3>
                    <p>Coming Soon...</p>
                  </Row>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
export default InfoCard;
