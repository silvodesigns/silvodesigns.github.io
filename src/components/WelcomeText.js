import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import logo from "../logo.png";
import "animate.css";

function AutohideText() {
  const [show, setShow] = useState(true);

  return (
    <ToastContainer position="top-center">
      <Toast
        show={show}
        onClose={() => setShow(false)}
        delay={7000}
        autohide
        className="animate__animated animate__fadeInDown"
      >
        <Toast.Header>
          <img
            src={logo}
            className="rounded me-2"
            style={{ width: 20 }}
            alt=""
          />
          <strong className="me-auto">Kevin Silvestre</strong>
          <small>Jan 1, 2022</small>
        </Toast.Header>
        <Toast.Body>Happy New Year! Dios los bendiga!😇</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default AutohideText;
