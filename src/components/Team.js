import { Col, Row } from "react-bootstrap";
import { TeamCard } from "./teamCard";

export const Team = () => {
  return (
    <div id="theteam">
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={4}>
              <h3>
                Meet the Team<br></br> & Contact Us
              </h3>
            </Col>
            <TeamCard
              name="Liliane Uwase"
              description="CEO & Lead Developper"
              imgUrl={require("../images/head/Head_Picture_2-removebg-preview.png")}
              number="+250 786 111 498"
              email="tr.liliane.uwase@gmail.com"
            />
            <Col md={6} xl={4}>
              <TeamCard
                name="Josiane Uwishimwe"
                description="Developper & Linguist"
                imgUrl={require("../images/head/Head_Picture_2-removebg-preview.png")}
                number="+250 781 312 511"
                email="uwishimwejosiane@gmail.com"
              />
            </Col>
            {/* <Col md={6} xl={7}>
              <div className="new-email-bx">
                <input type="email" placeholder="Email Address" />
                <button type="submit">Submit</button>
              </div>
            </Col> */}
          </Row>
        </div>
      </Col>
    </div>
  );
};
