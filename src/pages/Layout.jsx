import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import { LinkContainer } from "react-router-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";


const Layout = () => {

  return (
  <>
      <Row>
        <Navbar>
          <Container>
           
              <Nav>

                <LinkContainer to="/">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer> <br />

                <LinkContainer to="/about">
                  <Nav.Link>About</Nav.Link>
                </LinkContainer> <br />

                <LinkContainer to="/projects">
                  <Nav.Link>Projects</Nav.Link>
                </LinkContainer> <br />
                
                <LinkContainer to="/contact">
                  <Nav.Link>Contact</Nav.Link>
                </LinkContainer>

              </Nav>
            
          </Container>
        </Navbar>
      </Row>
      <Row>
        <Outlet />
      </Row>
    <Footer/>
    </>

  );
};

export default Layout;