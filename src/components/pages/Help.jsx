import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import React from "react";
import BoneCards from "../UI/BoneStuff/Bones";
import Form from "react-bootstrap/Form";

export default function Help() {
  return (
    <Container>
      <Row>
        <h1>Help! What do I do?</h1>
        <h3>Some tips for meeting Paprika's Needs</h3>
      </Row>
      <Row>
        <Form>
          {["checkbox"].map((type) => (
            <div key={`default-${type}`} className="mb-3">
              <Form.Check // prettier-ignore
                type={type}
                id={`outside`}
                label={`Go Outside`}
              />
              <Form.Check // prettier-ignore
                type={type}
                id={`water`}
                label={`Fill Water(s)`}
              />
              <Form.Check // prettier-ignore
                type={type}
                id={`kibble`}
                label={`Try feeding her kibble...`}
              />
              <ul>
                <li>In a Ball</li>
                <li>In a Puzzle</li>
                <li>in a Cardboard Box (kibble rolled up in newspapers)</li>
                <li>In a Towel or Blanket</li>
              </ul>
              <Form.Check // prettier-ignore
                type={type}
                id={`training`}
                label={`Training`}
              />
              <ul><p>Here is a list of her <a href="/tricks">current tricks</a> ...</p></ul>
              <Form.Check // prettier-ignore
                type={type}
                id={`bones`}
                label={`Give a Bone`}
              /><ul><p>Here are the <a href="#bones">Bones</a></p></ul>
              <Form.Check // prettier-ignore
                type={type}
                id={`licky`}
                label={`Give Peanut Butter`}
              />
              <ul>
                <li>In Green Thing</li>
                <li>On Licky Mat</li>
              </ul>
              <Form.Check // prettier-ignore
                type={type}
                id={`play`}
                label={`Try Play?`}
              />
              <Form.Check // prettier-ignore
                type={type}
                id={`toy`}
                label={`You can try giving her a new toy`}
              />
              <Form.Check // prettier-ignore
                type={type}
                id={`calmTreats`}
                label={`Give Treats for #Calmness`}
              />
              <ul><p>Get treats and sit where you’re trying to work/chill and tell her to lay down beside you, give her treats for doing this ever like 30s and then make more time between treats until she’s asleep</p></ul>
            </div>
          ))}
        </Form>
      </Row>
      <Row>
        {" "}
        <h3 id="#Bones">The Bones</h3>
        <BoneCards />
      </Row>
    </Container>
  );
}
