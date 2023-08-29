import { Col } from "react-bootstrap";
import "animate.css";

export const ProjectCard = ({ title, description, imgUrl,  link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <a
          style={{textDecoration: 'none'}}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>{title}</h4>{" "}
          </a>
          <span>{description}</span>
        </div>{" "}
      </div>
    </Col>
  );
};
