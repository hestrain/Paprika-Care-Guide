import { Container, ListGroup, ListGroupItem } from "react-bootstrap";
import { Row } from "react-bootstrap";
import React from "react";
import { Card } from "react-bootstrap";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Outside() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container>
      <Row>
        <h1>
          Outside

          </h1>
        <h3>How to do that </h3>
      </Row> 
<Row>
  <Card>
    <Card.Title>Key Things To Know</Card.Title>
    <Card.Body>
      <ul>
        <li>
          Back Door
        </li>
        <li>
          Bring Treats
        </li>
        <li>
          Don't let Tommy Out
        </li>
        <li>
          Check surroundings before opening gate or baby gate/retreat if there's too many people
        </li>
        <li>
          Pick Up Poops ASAP (weird landlord/lawn mower guy complaints...)
        </li>
        <li>
          Poop trash is the little blue bin on the porch
        </li>
        <li>
          She gets treats if she barks or if she looks @ you after hearing a noise (they can also be used to convince her to come inside)
        </li>
        <li>
          She is allowed in the lane but usually only wants to go if its dark & quiet
        </li>
        <li>
          If its raining theres a brown towel on the command hooks by the door, wipe off her pawsies and tummy when you come back in
        </li>
      </ul>
    </Card.Body>
    <Card.Subtitle>See Below for more.....</Card.Subtitle>
<Button variant="primary" onClick={handleShow}>
Long Detailed Instructions
      </Button>
  <Card.Body>
    I hope thats it! :)
  </Card.Body>
  </Card>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Long Detailed "Walk" Instructions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup>
          <ListGroupItem>
            1. Go to BACK DOOR
          </ListGroupItem>
          <ListGroupItem>
            2. Grab some treats from her Treat Jar (on the left hand side by the cookbooks) & put them in the treat pouch (on a command hook on the right)
          </ListGroupItem>
          <ListGroupItem>
            3. If it's dark grab the flashlight from under the treat bag, and turn on the light switch that says "Outside"
          </ListGroupItem>
          <ListGroupItem>
            4. Use the long blue leash on the door handle.
          </ListGroupItem>
          <ListGroupItem>
            5. Clip that thang on her collar. If she didn't follow you to the door say "Paprika, Outside?? "and she usually runs to you at an ungodly speed.
          </ListGroupItem>
          <ListGroupItem>
            6. Go outside! Careful of tommy but also I added a baby gate. 
          </ListGroupItem>
          <ListGroupItem>
            7. Check to see if the neighbors or lots of men are outside mostly so you know where they are.
          </ListGroupItem>
          <ListGroupItem>
            8. Pull baby gate handle to the left to let yourself out. She'll probs run down the stairs and try to chase the bordies. Theres poop bags attached to the leash, and the bottom of the stairs just in case.
          </ListGroupItem>
          <ListGroupItem>
            9. If she is barking or scared throw treats at her.
          </ListGroupItem>
          <ListGroupItem>
            10. If she gets too scared she probably will try to go back inside on her own but if not I usually just usher her with lots of "Paprika, Inside!" and if that doesn't work, treats will.
          </ListGroupItem>
          <ListGroupItem>
            11. If no one is outside and its daytime she'll probably want to hang out for a bit and sniffies, and potentially want you to chase her around. <br>
            </br> If she seems to want to be chased you can let her off the lead and do that, she has a blast. Otherwise she might want to just like. lay in the sun for a bit, and then go back inside. HOWEVER...
          </ListGroupItem>
          <ListGroupItem>
            12. If its dark enough and no one is out there she might want to walk in the lane!!! We love this. Look both ways in the lane before taking her out, just in case there is a sneaky quiet person.
            <br></br>She gets lots of treats for being outside, basically if she hears anything and then looks at me or near me she gets treats. 
            <br>
            </br>She'll probably want to go to the left not the right, and she might want to fully trespass into the back yards so watch out, but shes pretty good at coming back now if i make clicky tongue noises or say "paprika no trespassing". 
          </ListGroupItem>
        </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
</Row>
      <Row>
      </Row>
      <Row style={{height:"100px"}}>

      </Row>
    </Container>
  );
}
