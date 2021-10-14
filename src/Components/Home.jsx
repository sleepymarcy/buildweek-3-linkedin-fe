import { Row, Container, Col } from "react-bootstrap";
import Aside from "./Aside";
import MainContainer from "./MainContainer";
import About from "./About";
import Dashboard from "./Dashboard";
import Experience from "./Experience";
import ProfileHomePost from "./ProfileHomePost"

const Home = () => {
  return (
    <Container>
      <Row>
        <Col sm={12} md={9}>
          <br />
          <MainContainer />
          <Dashboard />
          <About />
          {/* <Activity /> */}
          <ProfileHomePost />
          <Experience />
        </Col>
        <Col sm={0} md={3}>
          <Aside />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
