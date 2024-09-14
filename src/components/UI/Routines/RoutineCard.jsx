import { React } from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import {Col} from "react-bootstrap";

export default function RoutineCard(props) {
  return (
    <Container>
      <Row>
        <Col>
        <h3>Morning Routine</h3>
        {props.routines.filter(routine => routine.time.includes('AM')).map((routine) => {
              const notes = routine.notes;
            return  (
            <Accordion defaultActiveKey="0" style={{ width: "90%" }} key={routine.id} className="accordions">
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
        <h3>Evening Routine</h3>
        {props.routines.filter(routine => routine.time.includes('PM')).map((routine) => {
              const notes = routine.notes;
            return  (
            <Accordion defaultActiveKey="0" style={{ width: "90%" }} key={routine.id} className="accordions">
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
        <Row style={{alignItems:"center",  margin:"15px"}}>
            <h3>Weekly Routines</h3>
            {props.routines.filter(routine => routine.time.includes('weekend')).map((routine) => {
              const notes = routine.notes;
            return  (
            <Accordion defaultActiveKey="0" style={{ width: "90%",}} key={routine.id}>
            <Accordion.Item eventKey={routine.id}>
              <Accordion.Header>{routine.title}</Accordion.Header>
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
