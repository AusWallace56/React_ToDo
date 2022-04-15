import React from 'react'

import { useAuth } from '../../Contexts/AuthContext'
import { Container, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './Auth.css'

export default function Login() {
  const {login} = useAuth();
  const navigate = useNavigate();

  async function handleAuth(){
    await login();

    return navigate('/todos')
  }

  return (
    <div className='login'>
        <article className='mb-5 p-5'>
          <h1 className='text-center'>Welcome to I Do To Dos</h1>
        </article>
        <Container>
          <Card className='m-2 border-dark text-center'>
            <Card.Header className='bg-dark text-white'>
              <h2>Login To Use Application</h2>
            </Card.Header>
            <Card.Body>
              <button onClick={() => handleAuth()} className='btn btn-dark'>
                Login with GitHub
              </button>
            </Card.Body>
          </Card>
        </Container>
    </div>
  )
}
