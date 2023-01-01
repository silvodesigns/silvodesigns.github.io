import "../styles/header.css";
import logo from "../logo.png";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Header() {
  return (
    <Container>
      <Row className="align-items-center">
        <Col>
          <div className="logo-container">
            <img src={logo} className="logo" alt="logo" />
          </div>
        </Col>
        <Col className="text-center">
          <Button
            href="https://www.paypal.com/paypalme/kevinjosesilvestre"
            size="lg"
            variant="warning"
            className="align-self-center"
          >
            PayPal
          </Button>{" "}
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
