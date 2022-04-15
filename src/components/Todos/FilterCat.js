import React, {useState, useEffect} from 'react'
import axios from 'axios'


export default function FilterCat(props) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://todoapi.austinwallace.net/api/categories/').then(response => {
            setCategories(response.data)
        })
    }, []);


  return (
    <div className='text-center mt-2 mb-4'>
        <button onClick={() => props.setFilter(0)} className='btn'>
            All
        </button>
        {categories.map(cat => 
                <button key={cat.CategoryId} onClick={() => props.setFilter(Number(cat.CategoryId))} className="btn" style={{marginLeft: '1em'}}>
                    {cat.Name}
                </button>
            )}
    </div>
  )
}
