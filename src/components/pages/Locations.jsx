import { Row } from "react-bootstrap";
import React from "react";
import BoneCards from "../UI/BoneStuff/Bones";
import { Accordion } from "react-bootstrap";
import { Card } from "react-bootstrap";

export default function Locations() {
  return (
  <>

  <Row style={{marginTop:"15px"}}>
        <Accordion>
          <Accordion.Header>Toys</Accordion.Header>
          <Accordion.Body style={{backgroundColor:"white"}}>                <ul>
                    <li>
                        bin in the livingroom beside the door
                    </li>
                    <li>
                        in the livingroom on her bed under the plants
                    </li>
                    <li>
                        bin in the bedroom to the right of the door
                    </li>
                    <li>
                        secret toys (new, for emergencies) are in the large clear bin in the office closet
                    </li>
                </ul>
          </Accordion.Body>
        </Accordion>
      </Row>
  <Row style={{marginTop:"15px"}}>
        <Accordion>
          <Accordion.Header>Food</Accordion.Header>
          <Accordion.Body style={{backgroundColor:"white"}}>
            Kibble is in the top shelf of the white cart in the livingroom in the container(s) with the red lid.
          </Accordion.Body>
        </Accordion>
      </Row>
  <Row style={{marginTop:"15px"}}>
        <Accordion>
          <Accordion.Header>Drugs</Accordion.Header>
          <Accordion.Body style={{backgroundColor:"white"}}>
2nd shelf of the white cart in the living room          
</Accordion.Body>
        </Accordion>
      </Row>
  <Row style={{marginTop:"15px"}}>
        <Accordion>
          <Accordion.Header>Treats</Accordion.Header>
          <Accordion.Body style={{backgroundColor:"white"}}>
            In containers in every room of the house labeled "Paprika Treats"! <br></br>
            If you need HIGHER VALUE TREATS: <br></br> bag of beef liver treats in the large clear bin in the office closet.
          </Accordion.Body>
        </Accordion>
      </Row>
  <Row style={{marginTop:"15px"}}>
        <Accordion>
          <Accordion.Header>Bones</Accordion.Header>
          <Accordion.Body style={{backgroundColor:"grey"}}>
        <BoneCards />
          </Accordion.Body>
        </Accordion>
      </Row>
      <div style={{height:"100px"}}></div>

  </>
  )
}