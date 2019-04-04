import React, { Component } from 'react';
import '../navbar.css'
import {Navbar} from 'react-bootstrap';

<Navbar>
  <Navbar.Brand className="brand">Collab</Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
      Signed in as: <a href="#login">Mark Otto</a>
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>