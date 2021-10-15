import {
  Navbar,
  Nav,
  Form,
  FormControl,
  InputGroup,
  Container,
} from "react-bootstrap";
import {
  Linked,
  Hicon,
  Nicon,
  Jicon,
  Micon,
  Bicon,
} from "../../assets/icons.jsx";
import { FaSearch as Sicon } from "react-icons/fa";
import { Work, User } from "../../assets/nav.jsx";
import { LinkContainer } from "react-router-bootstrap";
import "../../css/Nav.css";
import { Link, NavLink } from "react-router-dom";
import Search from "./Search";

const MyNav = () => {
  return (
    <div className="nav-wrapper">
      <Navbar bg="light" expand="lg" as="ul" className="justify-content-center">
        <Container className="d-flex justify-content-between py-1">
          <div className="d-flex">
            <Link to="/" as="li" className="mr-3">
              <Linked />
            </Link>
            <div className="nav-search">
              <Sicon />
              <Search />
            </div>
          </div>
          {/* Right side */}
          <div className="d-flex align-items-center">
            <NavLink
              className="d-flex flex-column align-items-center mx-2 text-muted"
              exact
              to="/home"
              activeClassName="selectedNavb"
            >
              <Hicon />
              <span className="text-dropdown">Home</span>
            </NavLink>
            <NavLink
              className="d-flex flex-column align-items-center mx-2 text-muted"
              exact
              to="/connections"
              activeClassName="selectedNavb"
            >
              <Nicon />
              <span className="text-dropdown">My Network</span>
            </NavLink>
            <NavLink
              className="d-flex flex-column align-items-center mx-2 text-muted"
              exact
              to="/jobs"
              activeClassName="selectedNavb"
            >
              <Jicon />
              <span className="text-dropdown">Jobs</span>{" "}
            </NavLink>
            <NavLink
              className="d-flex flex-column align-items-center mx-2 text-muted"
              exact
              to="/messaging"
              activeClassName="selectedNavb"
            >
              <Micon />
              <span className="text-dropdown">Messaging</span>{" "}
            </NavLink>
            <NavLink
              className="d-flex flex-column align-items-center mx-2 text-muted"
              exact
              to="/notific"
              activeClassName="selectedNavb"
            >
              <Bicon />
              <span className="text-dropdown">Notifications</span>
            </NavLink>
            <User as="li" />
            <Work as="li" />
            <NavLink
              className="d-flex flex-column justify-content-center align-items-center mx-2"
              exact
              to="/premium"
              activeClassName="selectedNavb"
            >
              <span className="text-dropdown premium">
                Try Premium for free
              </span>
            </NavLink>
          </div>
          {/*<Nav className="nav">
            <NavLink
            //   className="link-dropdown"
              exact
              to="/home"
              activeClassName="selectedNavb"
            >
              <Hicon />
              <span className="text-dropdown">Home</span>
            </NavLink>
            <Nav.Link as="li" href="#network" className="link-dropdown">
              <Nicon />
              <span className="text-dropdown">My Network</span>
            </Nav.Link>
            <Nav.Link as="li" href="#jobs" className="link-dropdown">
              <Jicon />
              <span className="text-dropdown">Jobs</span>
            </Nav.Link>
            <Nav.Link as="li" href="#messaging" className="link-dropdown">
              <Micon />
              <span className="text-dropdown">Messaging</span>
            </Nav.Link>
            <Nav.Link as="li" href="#notifications" className="link-dropdown">
              <Bicon />
              <span className="text-dropdown">Notifications</span>
            </Nav.Link>
            <User as="li" />
            <Work as="li" />

            <Nav.Link as="li" href="#work" className="link-dropdown prem">
              <span className="text-dropdown premium">
                Try Premium for free
              </span>
            </Nav.Link>
          </Nav> */}
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNav;
