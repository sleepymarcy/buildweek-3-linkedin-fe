import { Row, Container, Col } from "react-bootstrap";
import Aside from "./Aside";
import MainContainer from "./profile/MainContainer";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col sm={12} md={9}>
          <br />
          <MainContainer />
          {/* <Activity /> */}
        </Col>
        <Col sm={0} md={3}>
          <Aside />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
