import React from "react";

import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

export default function Navigation() {
  const { currentUser, logout } = useAuth();
  return (
    <Navbar bg="dark" variant="dark" expand="md" className="p-3">
      <Navbar.Brand href="/">I Do To Dos</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav className="mr-auto">
          {currentUser && 
            <>
              <Link to="/todos" className="nav-link">
                To Dos
              </Link>
              <Link to="/categories" className="nav-link">
                Categories
              </Link>
              <Nav.Link onClick={() => logout()}>Logout</Nav.Link>
            </>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
