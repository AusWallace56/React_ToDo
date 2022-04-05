import React from 'react'

import {Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <Navbar bg='dark' variant='dark' expand='md' className='p-3'>
        <Navbar.Brand href ='/'>I Do To Dos</Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse className='justify-content-end'>
            <Nav className='mr-auto'>
            <Link to='/todos' className='nav-link'>To Dos</Link>
            <Link to='/categories' className='nav-link'>Categories</Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}
