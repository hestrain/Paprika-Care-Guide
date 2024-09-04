import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Footer() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="bottom">
      <Container>
        <Navbar.Brand href="#">Footer</Navbar.Brand>
        <img className='footerimg' src='/images/dachshund.svg'></img>
      </Container>
    </Navbar>
  );
}

