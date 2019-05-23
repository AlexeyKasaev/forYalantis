import React from 'react';

import Navbar from 'react-bootstrap/Navbar';


function Header(props) {
    return (
        <Navbar className="mb-4" bg="dark" variant="dark">
            <Navbar.Brand>WUSHU</Navbar.Brand>
        </Navbar>
    );
}

export default Header;