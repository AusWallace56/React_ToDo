import React from 'react'
import { useAuth } from '../Contexts/AuthContext';
import Logout from './Auth/Logout';

export default function Footer() {
    const {currentUser} = useAuth();
  return (
    <>
    {currentUser &&
    <Logout/>
    }
    <footer className='text-center text-white bg-dark p-4'>
        <strong>&copy; Austin Wallace {new Date().getFullYear()} All Rights Reserved</strong>
    </footer>
    </>
  )
}
