import React, {useState} from 'react'
import axios from 'axios'
import { useAuth } from '../../Contexts/AuthContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas,} from '@fortawesome/free-solid-svg-icons'
import ToDoEdit from './ToDoEdit'

library.add(fas)

export default function SingleToDo(props) {
  const {currentUser} = useAuth();
  const [showEdit, setShowEdit] = useState(false);

  const [styleToggled, setStyleToggled] = useState(false);

  const ToggleStyle = () => {
    styleToggled ? setStyleToggled(false) : setStyleToggled(true)
  }

  const deleteToDo = (id) => {
    if(window.confirm(`Are you sure you want to delete ${props.todos.Action}?`))
    {
      axios.delete(`http://todoapi.austinwallace.net/api/ToDo/${id}`).then(() => {props.getToDos()})
    }
  }
  return (
    <>
    <div className='row' style={{fontSize: '2em'}}>
      <div className={styleToggled ? "completed" : 'toDoItem'} onClick={ToggleStyle}>
           {currentUser.email === process.env.REACT_APP_EMAIL_ADMIN &&
        <span>
          <span className='editIcon'>
          <button id='editLink' onClick={() => setShowEdit(true)}>
            <FontAwesomeIcon icon={['fas', 'edit']}/>
          </button>
          </span>
          <span className='deleteIcon'>
          <button id='deleteLink' onClick={() => deleteToDo(props.todos.ToDoId)}>
            <FontAwesomeIcon icon={['fas', 'trash-alt']}/>
          </button>
          </span>
          {showEdit && 
            <ToDoEdit
              todos={props.todos}
              showEdit={showEdit} 
              setShowEdit={setShowEdit}
              getToDos={props.getToDos}
            />
          }
        </span>
      }
        {props.todos.Action}
        </div>
    </div>
    <div>

    </div>
    </>
    
  )
}
