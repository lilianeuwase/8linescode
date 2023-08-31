import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../images/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import projImg1 from "../images/Mediqqo1.svg";
import projImg2 from "../images/MediqqoDB.svg";
import projImg3 from "../images/BH.svg";
import projImg4 from "../images/RYVC.svg";
import projImg5 from "../images/Stigma.svg";
import projImg6 from "../images/8lines.svg";

// let projImg1 =require("../images/Mediqqo1.svg");
// let projImg2 =require( "../images/MediqqoDB.svg");
// let projImg3 =require( "../images/BH.svg");
// let projImg4 =require( "../images/RYVC.svg");
// let projImg5 =require( "../images/Stigma.svg");
// let projImg6 =require( "../images/8lines.svg");

export const Projects = () => {

  const projects = [
    {
      title: "Mediqqo",
      description: "Electronic Prescription",
      imgUrl: projImg1,
      link: "https://mediqo.onrender.com/",
    },
    {
      title: "Mediqqo Login",
      description: "Mediqqo Login",
      imgUrl: projImg2,
      link: "https://mediqo.onrender.com/login",
    },
    {
      title: "Bank of Health",
      description: "E-Health",
      imgUrl: projImg3,
      link: "https://bankofhealth.vercel.app/",
    },
    {
      title: "Rwanda Youth Voice for Change",
      description: "Health & Education",
      imgUrl: projImg4,
      link: "http://rwandayvchange.org/",
    },
    {
      title: "Abortion Stigma",
      description: "Health & Education",
      imgUrl: projImg5,
      link: "https://fightabortionstigma.org/",
    },
    {
      title: "8 Lines Code",
      description: "Design & Development",
      imgUrl: projImg6,
      link: "https://eightlinescode.onrender.com/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>8 Lines Code works with different clients of different needs and requests. These are some of 8 Lines Code concluded projects</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav> */}
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    {/* <Tab.Pane eventKey="section">
                      <p>Hi</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
