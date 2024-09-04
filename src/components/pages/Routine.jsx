import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import React from "react";
import "../UI/General.css";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import { Row } from "react-bootstrap";

export default function Routine() {
  return (
    <>
      <Container>
        <Row>
          <h1>Routines</h1>
        </Row>
        <Row>
        <Card>
              <Card.Body>
                <Card.Title>Morning Routine</Card.Title>
                <ListGroup>
                  <ListGroup.Item>
                    <Form>
                      {["checkbox"].map((type) => (
                        <div key={`default-${type}`} className="mb-3">
                          <Form.Check // prettier-ignore
                            type={type}
                            id={`drugsAm`}
                            label={`Drugs`}
                          />
                        </div>
                      ))}
                    </Form>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    {" "}
                    <Form>
                      {["checkbox"].map((type) => (
                        <div key={`default-${type}`} className="mb-3">
                          <Form.Check // prettier-ignore
                            type={type}
                            id={`peeAm`}
                            label={`Outside for a Pee`}
                          />
                        </div>
                      ))}
                    </Form>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    {" "}
                    <Form>
                      {["checkbox"].map((type) => (
                        <div key={`default-${type}`} className="mb-3">
                          <Form.Check // prettier-ignore
                            type={type}
                            id={`breakfast`}
                            label={`Kibble just in case she'll eat it`}
                          />
                        </div>
                      ))}
                    </Form>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
        </Row>
      </Container>
    </>
  );
}
