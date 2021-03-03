import React,{Component} from 'react';
import { Navbar,
         Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    return(
        <div>
            <Navbar bg="light" expand="lg">{/*Navigation Bar */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="#home">Add</Nav.Link>
                            <Nav.Link href="#edit">Edit</Nav.Link>
                                <Nav.Link href="#retrieve">Retrieve</Nav.Link>
                                    <Nav.Link href="#display">Display</Nav.Link>
          </Nav>
        
        </Navbar.Collapse>
      </Navbar>
        </div>
    );
}

export default NavBar;  