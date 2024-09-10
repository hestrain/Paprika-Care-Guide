import { React } from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import { Button } from "react-bootstrap";
import {Col} from "react-bootstrap";

export default function RoutineCard(props) {
  return (
    <Container>
      <Row>
        <Col>
        <h2>Morning Routine</h2>
        {props.routines.filter(routine => routine.time.includes('AM')).map((routine) => {
              const notes = routine.notes;
            return  (
            <Accordion defaultActiveKey="0" style={{ width: "90%" }} key={routine.id}>
            <Accordion.Item eventKey={routine.id}>
              <Accordion.Header>#{routine.order}: {routine.title}</Accordion.Header>
              <Accordion.Body>
                {/* here is where were rendering the array of notes */}
                <ul>
                {notes.map((note) => {
                  return (
                      <li>{note}</li>
                    );
                })}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
            )
          }
        )}
        </Col>
        <Col>
        <h2>Evening Routine</h2>
        {props.routines.filter(routine => routine.time.includes('PM')).map((routine) => {
              const notes = routine.notes;
            return  (
            <Accordion defaultActiveKey="0" style={{ width: "90%" }} key={routine.id}>
            <Accordion.Item eventKey={routine.id}>
              <Accordion.Header>#{routine.order}: {routine.title}</Accordion.Header>
              <Accordion.Body>
                {/* here is where were rendering the array of notes */}
                <ul>
                {notes.map((note) => {
                  return (
                      <li>{note}</li>
                    );
                })}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
            )
          }
        )}
        </Col>
        <Row>
            <h2>Weekly Routines</h2>
            {props.routines.filter(routine => routine.time.includes('weekend')).map((routine) => {
              const notes = routine.notes;
            return  (
            <Accordion defaultActiveKey="0" style={{ width: "90%" }} key={routine.id}>
            <Accordion.Item eventKey={routine.id}>
              <Accordion.Header>#{routine.order}: {routine.title}</Accordion.Header>
              <Accordion.Body>
                {/* here is where were rendering the array of notes */}
                <ol>
                {notes.map((note) => {
                  return (
                      <li>{note}</li>
                    );
                })}
                </ol>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
            )
          }
        )}
        </Row>
      </Row>
    </Container>
  );
}
