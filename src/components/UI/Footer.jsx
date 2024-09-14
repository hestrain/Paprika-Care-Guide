import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Footer() {
  return (
    <Navbar expand="lg" className="bg-dark body-tertiary" fixed="bottom" >
      <Container>
        <Navbar.Brand style={{fontSize:"small", color:"antiquewhite"}}>© HeatherEllen Strain 2024</Navbar.Brand>
        <a href="/help" >
        <img className='footerimg' src='/images/dachshund.svg'></img>
        </a>
      </Container>
    </Navbar>
  );
}

