import { React } from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import { Button } from "react-bootstrap";
import './List.css'

export default function ListCard(props) {
  return (
    <Container>
      <Row>
        {props.thingsToTry.map((thing) => {
            //notes variable becuase its an array, this will let us actually render the array yahoo
          const list = thing.notes;
          //link variable for conditional formatting
          const link = thing.link;

          if (link == null) {
              //if no link needed return this
            return  <Accordion defaultActiveKey="0" className="accordions">
            <Accordion.Item eventKey={thing.id}>
              <Accordion.Header>{thing.title}</Accordion.Header>
              <Accordion.Body>
                {/* here is where were rendering the array of notes */}
                <ul>
                {list.map((note) => {
                  return (
                      <li>{note}</li>
                    );
                  })}
                  </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>;
          } else {
            //if we do have a link to add create a button for the link!
            return (
              <Accordion defaultActiveKey="0" className="accordions">
                <Accordion.Item eventKey={thing.id}>
                  <Accordion.Header>{thing.title}</Accordion.Header>
                  <Accordion.Body>
                    {/* here is where were rendering the array of notes */}
                    <ul>
                    {list.map((note) => {
                      return (
                          <li>{note}</li>
                        );
                      })}
                      </ul>
                    {/* and this is the conditional button, so that it only appears if a link exists */}
                    <Button href={thing.link}>{thing.linkText}</Button>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            );
          }
        })}
      </Row>
    </Container>
  );
}
