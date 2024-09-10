import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import lostSpace from "/public/images/space.jpg";


export default function Other() {
  return (
        <div style={{backgroundImage:`url(${lostSpace})`, backgroundRepeat:"repeat", minHeight:"1000px"}}>
    <Container>
<Card >404 page not found</Card>
<Row >
<div style={{display:"flex", alignItems:"center"}}>

<Col md="6">
<img src="/images/paprika vectir2.png" style={{width:"100%", borderRadius:"500px", border:"6px aqua solid", margin:"30px"}}></img>
</Col>
<Col md="3">

   <h1 style={{padding:"40px", textAlign:"center", margin:"20px", marginBottom:"300px",border:"4px solid black", borderRadius:"200px 200px 200px 10px", backgroundColor:"white"}}>
   Wrong Page, Bucko
    </h1> 
</Col>
</div>
</Row>
<Row>
    <a href="/help">
<h3 style={{color:"white", textAlign:"center"}}><scan style={{backgroundColor:"black", padding:"4px"}}>back to safety</scan></h3>
    </a>

</Row>
    </Container>
</div>
  );
}
