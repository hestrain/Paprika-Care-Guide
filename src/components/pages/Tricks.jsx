import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import React, {useState, useEffect} from "react";
import VideoPrompt from "../UI/VideoPrompt";

import TrickCards from "../UI/TrickStuff/Tricks";

export default function Tricks () {
    const [showVideoPrompt, setShowVideoPrompt] = useState(false);
    
    const handleVideoButtonClick = () => {
        setShowVideoPrompt(true);
      };
    
      const handleCloseVideoPrompt = () => {
        setShowVideoPrompt(false);
      };
    return (
        <Container>
            <Row><h1>Trick List & Instructions</h1></Row>
            <Row>
                <TrickCards />
            </Row>
            <Row className="videoRow">
            <Button
              className="p-3 m-3 trickBtn"
              type="button"
              onClick={handleVideoButtonClick} // Show the VideoPrompt when clicked
            >
              Play Trick Reel
            </Button>

            {showVideoPrompt && (
  <VideoPrompt
  show={showVideoPrompt}
  onClose={handleCloseVideoPrompt}
  videoUrl="https://www.youtube.com/embed/kUbVPgdhQ7I" 
  title="paprika trick reel - november 2023"
/>
)}
            </Row>
        </Container>
    )
}

