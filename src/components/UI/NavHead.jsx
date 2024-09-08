import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./General.css";

export default function NavHead() {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Nav className="me-auto">
          <Navbar.Brand href="/help">
            <img
              src="/images/pixil-frame-0.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="paprika logo"
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
          <Nav.Link href="/other">
            <img
              src="/images/doctor_watson.png"
              className="navIcon"
            ></img>{" "}
            Other
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
