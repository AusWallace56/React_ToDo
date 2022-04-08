import React from 'react'

export default function SingleToDo(props) {
  return (
    <div className='singleTodo col-md-5 m-4'>
        <h3>{props.todos.Action}</h3>
        <h2>{props.todos.Done ?
             'Completed' :
             'Not Completed'}</h2>
    </div>
  )
}
