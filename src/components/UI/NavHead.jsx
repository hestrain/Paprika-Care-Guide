import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./General.css";

export default function NavHead() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Nav className="me-auto">
          <Navbar.Brand href="/help">
            <img
              src="/public/images/icon sm.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="paprika logo"
            />{" "}
          </Navbar.Brand>
          <Nav.Link href="/help">
            <img
              src="/public/images/circle_question-0.png"
              className="navIcon"
            ></img>{" "}
            Help
          </Nav.Link>
          <Nav.Link href="/routine">
            <img src="/public/images/clock-1.png" className="navIcon"></img>{" "}
            Routine
          </Nav.Link>
          <Nav.Link href="/other">
            <img
              src="/public/images/doctor_watson.png"
              className="navIcon"
            ></img>{" "}
            Other
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
