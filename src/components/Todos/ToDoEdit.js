import React from 'react'
import {Modal} from 'react-bootstrap'
import ToDoForm from './ToDoForm'
import './Form.css'

export default function ToDoEdit(props) {
  return (
    <Modal
        show={props.showEdit}
        onHide={() => props.setShowEdit(false)}
    >
        <Modal.Header className='formHeader' closeButton>
            <h3>Editing {props.todos.Action}</h3>
        </Modal.Header>
        <Modal.Body className='formBody'>
            <ToDoForm
                todos={props.todos}
                setShowEdit={props.setShowEdit}
                getToDos={props.getToDos}
            />
        </Modal.Body>
    </Modal>
  )
}
