import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
const cardstyle = {
  padding: "10px",
  marginBottom: "15px",
  border: "solid 2px cyan",
  alignSelf: "center",
};

function boneMath(bone) {
const pricePer = Math.round((bone.price/bone.perPack)*100 )/100;
return pricePer;
}

function BoneCard(props) {
  return (
    <Container>
      <Row>
       {props.bones.map((bone) => {
         return(
          <Col md="3" key={bone.id}>
    <Card style={cardstyle} >
      <Card.Body>
        <Card.Title>{bone.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{bone.storedIn}</Card.Subtitle>
        <Card.Text>
          {bone.notes}
        </Card.Text>
      </Card.Body>
      <Card.Body>
Quantity: {bone.quantity}<br></br>
${boneMath(bone)} each (est)
      </Card.Body>
    </Card>
    </Col>
        )
       })}
       </Row>
    </Container>
  );
}

export default BoneCard;