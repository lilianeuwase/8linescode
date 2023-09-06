import { Col, Row } from "react-bootstrap";
import { TeamCard } from "./cards/teamCard";
import CardItem1 from "./cards/CardItem1";
import "../components/cards/cards.css";
import { CardItem2 } from "./cards/cardItem2";
import { CardNoImage } from "./cards/cardNoImage";

export const Team = () => {
  return (
    <div id="theteam">
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={6}>
              <h3>Meet & Contact the team</h3>
            </Col>
            <div className="cards_container">
              <div className="cards_wrapper">
                <ul className="cards_items">
                  <Col md={6} xl={5} style={{ paddingRight:15}}>
                    <CardItem2
                      name="Liliane Uwase"
                      title="Lead Developper & Designer"
                      imgUrl={require("../images/LilianeCircle.png")}
                      number="+250 786 111 498"
                      email="tr.liliane.uwase@gmail.com"
                    />
                  </Col>
                  <Col md={6} xl={5} style={{ paddingRight:15}}>
                    <CardItem2
                      name="Josiane Uwishimwe"
                      title="Developper & Linguist"
                      imgUrl={require("../images/JosianeCircle.png")}
                      number="+250 781 312 511"
                      email="uwishimwejosiane@gmail.com"
                    />
                  </Col>
                  {/* <Col md={6} xl={2}>
                    <CardNoImage
                      name="Josiane Uwishimwe"
                      title="Developper & Linguist"
                      imgUrl={require("../images/JosianeBG.png")}
                      number="+250 781 312 511"
                      email="uwishimwejosiane@gmail.com"
                    />
                  </Col> */}
                </ul>
              </div>
            </div>
          </Row>
        </div>
      </Col>
    </div>
  );
};

{
  /* <div id="theteam">
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
              imgUrl={require("../images/Head_Picture_2-removebg-preview.png")}
              number="+250 786 111 498"
              email="tr.liliane.uwase@gmail.com"
            />
            <Col md={6} xl={4}>
              <TeamCard
                name="Josiane Uwishimwe"
                description="Developper & Linguist"
                imgUrl={require("../images/JosianeBG.png")}
                number="+250 781 312 511"
                email="uwishimwejosiane@gmail.com"
              />
            </Col>
            <Col md={6} xl={7}>
              <div className="new-email-bx">
                <input type="email" placeholder="Email Address" />
                <button type="submit">Submit</button>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    </div> */
}
