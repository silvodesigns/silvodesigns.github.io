import "../styles/footer.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Inst from "../instgram_icon.png";
import You from "../yt_icon.png";
import Fb from "../fb_icon.png";
import Tik from "../tik.png";

function Footer() {
  return (
    <Container>
      <Row style={{ paddingTop: "30px", paddingBottom: "40px" }}>
        <Col className="text-center">
          {" "}
          <a href="https://www.instagram.com/kevinjsilvestre/">
            <img src={Inst} className="social_icons" alt="instagram" />
          </a>
        </Col>
        <Col className="text-center">
          {" "}
          <a href="https://www.youtube.com/@KevinSilvestre/">
            <img src={You} className="social_icons" alt="YouTube" />
          </a>
        </Col>
        <Col className="text-center">
          {" "}
          <a href="https://www.facebook.com/kevinjosesilvestre/">
            <img src={Fb} className="social_icons" alt="FaceBook" />
          </a>
        </Col>
        <Col className="text-center">
          <a href="https://www.tiktok.com/@kevinjsilvestre?_t=8XxsXSrSsH5&_r=1">
            <img src={Tik} className="social_icons" alt="TikTok" />
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
