import React, {useState, useEffect} from 'react'
import { Formik, Form, Field} from 'formik'
import {toDoSchema} from '../../Utilities/validationSchemas'
import axios from 'axios'

export default function ToDoForm(props) {
    const [categories, setCategories] = useState([]);
    const getCategories = () => {
        axios.get('http://localhost:59270/api/categories/').then(response => {setCategories(response.data)})
    }
    const handleSubmit = (values) => {
        console.log(values)

        if(!props.todos){
            // console.log('create mode')
            const toDoToCreate = {
                Action: values.Action,
                Done: false,
                CategoryId: values.CategoryId
            }
            axios.post('http://localhost:59270/api/ToDo', toDoToCreate).then(() => {
                props.getToDos();
                props.setShowCreate(false);
            })
        }
        else{
            console.log('edit mode')
        }
    }

useEffect(() => {
    getCategories();
}, []);

  return (
        <Formik
        initialValues={{
            Action: props.todos ? props.todos.Action : '',
            CategoryId: props.todos ? props.todos.CategoryId : '',
            Done: false
        }}
        validationSchema={toDoSchema}
        onSubmit={(values) => handleSubmit(values)}
        >
        {({errors, touched}) => (
            <Form id='toDoForm'>
                <div className='form-group m-3'>
                    <Field name='Action' className='form-control' placeholder='To Do'/>
                    {errors.Action && touched.Action ?
                    <div className='text-danger'>{errors.Action}</div> : null}
                </div>
                <div className='form-group m-3'>
                    <Field as='select' name='CategoryId' className='form-control'>
                        <option value='' hidden>[--Please Choose--]</option>
                         {categories.map(cat => 
                             <option key={cat.CategoryId} value={cat.CategoryId}>
                                 {cat.Name}
                             </option>
                         )}
                    </Field>
                </div>
                <div className='form-group m-3'>
                    <button type='submit' className='btn btn-info m-3'>Submit ToDo to API</button>
                </div>
            </Form>
        )}
        </Formik>
  )
}
