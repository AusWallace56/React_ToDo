import React from "react";

import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import image from '../images/RingClipart.png'

export default function Navigation() {
  const { currentUser, logout } = useAuth();
  return (
    <Navbar bg="dark" variant="dark" expand="md" className="p-3">
      <Navbar.Brand href="/" style={{width: '10%'}}>I Do To Dos
      <span>
      <img src={image} alt="Wedding Rings" style={{width: '50%', paddingLeft: '.5em'}}/> 
      </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav className="mr-auto">
          {currentUser && 
            <>
              <Link to="/todos" className="nav-link" style={{fontSize: '1.5em'}}>
                To Dos
              </Link>
              <Link to="/categories" className="nav-link" style={{fontSize: '1.5em'}}>
                Categories
              </Link>
              <Nav.Link onClick={() => logout()} style={{fontSize: '1.5em'}}>Logout</Nav.Link>
            </>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
