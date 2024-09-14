import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./General.css";

export default function NavHead() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Nav className="me-auto" style={{display:"flex", alignItems:"center"}}>
          <Navbar.Brand href="/help">
            <img
              src="/images/paprika vectir2.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="paprika logo"
              style={{background:"gold", borderRadius:"30px"}}
            />{" "}
          </Navbar.Brand>
          <Nav.Link href="/help">
            <img
              src="/images/circle_question-0.png"
              className="navIcon"
            ></img>{" "}
            Help
          </Nav.Link>
          <Nav.Link href="/routine">
            <img src="/images/clock-1.png" className="navIcon"></img>{" "}
            Routine
          </Nav.Link>
          <Nav.Link href="/tricks">
            <img
              src="/images/overlay_share_cool-3.png"
              className="navIcon"
            ></img>{" "}
            Tricks
          </Nav.Link>
          <Nav.Link href="/other">
            <img
              src="/images/doctor_watson.png"
              className="navIcon"
            ></img>{" "}
            Other Info
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
