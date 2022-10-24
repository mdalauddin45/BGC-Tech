import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LeftSideNav from "../Pages/Shared/LeftSideNav/LeftSideNav";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/">
          <Image
            className="border rounded"
            src="https://elearningindustry.com/wp-content/uploads/2015/05/Online-Learning-Teaching-Techniques.jpg"
            width="30"
            height="30"
          />
        </Link>
        <Navbar.Brand to="/">BGC Tech</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/courses">Courses</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/login">Login</Link>
          </Nav>
          <div className="d-lg-none">
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
