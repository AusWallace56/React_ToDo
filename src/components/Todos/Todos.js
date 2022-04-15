import React, {useState, useEffect} from 'react'
import { Container } from 'react-bootstrap'
import axios from 'axios'
import SingleToDo from './SingleToDo';
import {useAuth} from '../../Contexts/AuthContext'
import ToDoCreate from './ToDoCreate';
import './ToDo.css'
import FilterCat from './FilterCat';

export default function Todos() {

  const [todos, setTodos] = useState([]);

  const {currentUser} = useAuth()
  const [showCreate, setShowCreate] = useState(false);
  
  const [filter, setFilter] = useState(0);

  const getToDos = () => {
    axios.get('http://todoapi.austinwallace.net/api/ToDo').then(response => {
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
      <div className='p-2 mb-3 text-center'>
        <button className='btn' onClick={() => setShowCreate(!showCreate)}>
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
      <FilterCat
        setFilter={setFilter}
      />
      <Container>
          {filter === 0 ?
          todos.map(x => 
           <SingleToDo
           key={x.ToDoId}
           todos={x}
           getToDos={getToDos}
           />
           ) :
           todos.filter(x => x.CategoryId === filter).map(x => 
            <SingleToDo
            key={x.ToDoId}
            todos={x}
            getToDos={getToDos}
            />
            )
          }
          {filter !== 0 && todos.filter(x => x.CategoryId === filter).length === 0 && 
            <h2>
              Sorry, but there are no results for this category.
            </h2>
          }
      </Container>
    </section>
  )
}
