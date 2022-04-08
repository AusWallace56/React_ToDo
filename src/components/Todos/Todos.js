import React, {useState, useEffect} from 'react'
import { Container } from 'react-bootstrap'
import axios from 'axios'
import SingleToDo from './SingleToDo';
import {useAuth} from '../../Contexts/AuthContext'
import ToDoCreate from './ToDoCreate';

export default function Todos() {

  const [todos, setTodos] = useState([]);

  const {currentUser} = useAuth()
  const [showCreate, setShowCreate] = useState(false);
  

  const getToDos = () => {
    axios.get('http://localhost:59270/api/ToDo').then(response => {
      setTodos(response.data)
    })
  }

  useEffect(() => {
    getToDos();
  }, []);
  return (
    <section className='todos'>
      <article className='p-5'>
        <h1>To Dos</h1>
      </article>
      {currentUser.email === process.env.REACT_APP_EMAIL_ADMIN && 
      <div className='bg-dark p-2 mb-3 text-center'>
        <button className='btn btn-info' onClick={() => setShowCreate(!showCreate)}>
          {!showCreate ? "Create To Do" : "Close Form"}
        </button>
        {showCreate &&
        <div className='createContainer'>
          <ToDoCreate
          getToDos={getToDos}
          setShowCreate={setShowCreate}
          />
        </div>
        }
      </div>
      }
      <Container>
        <article className='todoGallery row justify-content-center'>
          {todos.map(x => 
           <SingleToDo
           key={x.ToDoId}
           todos={x}
           />
           )}
        </article>
      </Container>
    </section>
  )
}
