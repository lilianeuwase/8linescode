import { Container, Row, Col } from "react-bootstrap";
import logo from "../images/Logo4-2B.svg";
import navIcon1 from "../images/nav-icon1.svg";
import navIcon2 from "../images/nav-icon2.svg";
import navIcon3 from "../images/nav-icon3.svg";
import { Team } from "./Team";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Team
        
          />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/liliane-uwase-907830163/"
                target="_blank"
              >
                <img src={navIcon1} alt="Icon" />
              </a>
              {/* <a href="#"><img src={navIcon2} alt="Icon" /></a> */}
              <a href="https://www.instagram.com/lil_wase/" target="_blank">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2023. All Rights Reserved to 8 Lines Code</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
