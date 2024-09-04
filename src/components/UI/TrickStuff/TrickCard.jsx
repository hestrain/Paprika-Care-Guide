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

function TrickCard(props) {
  return (
    <Container>
      <Row>
       {props.tricks.map((trick) => {
         return(
          <Col md="2" key={bone.id}>
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

export default TrickCard;