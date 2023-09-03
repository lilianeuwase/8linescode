import { Col } from "react-bootstrap";
import { EnvelopeFill, Telephone } from "react-bootstrap-icons";
import Card from "react-bootstrap/Card";

const styles = {
  cardImage: {
    objectFit: "cover",
    width: "20vw",
    height: "35vh",
  },
  card: {
    width: "18rem",
  },
};

export const TeamCard = ({ name, description, imgUrl, number, email }) => {
  return (
    <Col md={6} xl={4}>
      <Card style={styles.card} border="blue">
      {/* <div className="TeamCard"> */}
        <Card.Img variant="top" src={imgUrl} style={styles.cardImage} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text class="text-secondary">{description}</Card.Text>
          <Card.Text>
            <Telephone />
            {number}
            <br />
            <EnvelopeFill />
            {"   "}
            {email}
          </Card.Text>
        </Card.Body>
      {/* </div> */}
      </Card>

      {/* <Col md={6} xl={7}>
        <div className="new-email-bx">
          <input type="email" placeholder="Email Address" />
          <button type="submit">Submit</button>
        </div>
      </Col> */}
    </Col>
  );
};
