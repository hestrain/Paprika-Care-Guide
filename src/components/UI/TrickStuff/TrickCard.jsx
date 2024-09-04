import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import "./Tricks.css"

const cardstyle = {
  padding: "10px",
  marginBottom: "15px",
  border: "solid 2px cyan",
  alignSelf: "center",
};

function difficulty (props) {
console.log(props);


  return `mb-2text muted ${props}`
}

function length (props) {
  let length = props.length;
  return length;
}

function TrickCard(props) {
  return (
    <Container>
      <Row>
       {props.tricks.map((trick) => {
         return(
          <Col md="4" key={trick.id}>
    <Card style={cardstyle} >
      <Card.Body>
      <p className='counter'>Trick {trick.id} / {length(props.tricks)}</p>
        <Card.Title>{trick.title}</Card.Title>
        <Card.Subtitle className="mb-2 text muted"><p className={difficulty(trick.level)}>{trick.level}</p></Card.Subtitle>
        <Card.Text>
         <strong>Notes:</strong>  {trick.notes}
        </Card.Text>
      </Card.Body>
      <Card.Body>
<strong>How To:</strong> {trick.howTo}
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