import { Col, Row } from "react-bootstrap";
// Messi sotto forma di bottoni solo perchè mi davano fastidio quegli pseudo-errori dell'a href

const NavBar = () => {
  return (
    <>
      <Row>
        <Col xs={9} lg={11} className="mainLinks d-none d-md-flex ">
          <a href="#" variant="success" className="text-decoration-none">
            TRENDING
          </a>
          <a href="#" variant="success" className="text-decoration-none">
            PODCAST
          </a>
          <a href="#" variant="success" className="text-decoration-none">
            MOODS AND GENRES
          </a>
          <a href="#" variant="success" className="text-decoration-none">
            NEW RELEASES
          </a>
          <a href="#" variant="success" className="text-decoration-none">
            DISCOVER
          </a>
        </Col>
      </Row>
    </>
  );
};
export default NavBar;
