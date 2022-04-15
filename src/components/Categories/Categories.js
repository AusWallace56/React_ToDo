import React, {useState, useEffect} from 'react'
import './Categories.css'
import { Container } from 'react-bootstrap'
import SingleCategory from './SingleCategory'
import axios from 'axios'
import { useAuth } from '../../Contexts/AuthContext'
import CatCreate from './CatCreate'

export default function Categories() {
  const [categories, setCategories] = useState([]);

  const {currentUser} = useAuth()
  const [showCreate, setShowCreate] = useState([]);

  const getCategories = () => {
    axios.get('http://todoapi.austinwallace.net/api/categories/').then(response => {
      setCategories(response.data)
    })
  }

  useEffect(() => {
    getCategories()
  }, []);
  return (
    <section className='categories'>
    <article className=' p-5'>
        <h1 className='text-center'>Categories Dashboard</h1>
    </article>
    {currentUser.email === process.env.REACT_APP_EMAIL_ADMIN && 
    <div className='bg-dark p-2 mb-3 text-center'>
      {showCreate ? 
      <>
      <button onClick={() => setShowCreate(false)} className='btn'>
        Cancel
      </button>
      <CatCreate
      setShowCreate={setShowCreate}
      getCategories={getCategories}
      />
      </>:
      <button onClick={() => setShowCreate(true)} className='btn'>
        Create New Category
      </button>
      }
    </div>
    }
    <Container>
        <table className='table table-dark mt-3 mb-3'>
            <thead className=' text-uppercase'>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    {currentUser.email === process.env.REACT_APP_EMAIL_ADMIN && 
                      <th>Actions</th>
                    }
                </tr>
            </thead>
            <tbody>
                {/*STEP 5 - CategoriesRead - Map the categories to the SingleCategory component */}
                {categories.map(x => 
                        <SingleCategory 
                        key={x.CategoryId}
                        category={x}
                        getCategories={getCategories}
                        />
                    )}
            </tbody>
        </table>
    </Container>
</section>
  )
}
