
import './App.css';
import Navigation from './components/Navigation';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Login from './components/Login/Login';
import Categories from './components/Categories/Categories';
import Todos from './components/Todos/Todos';
import './'
import NotFound from './components/NotFound';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navigation/>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='todos' element={<Todos/>}/>
          <Route path='categories' element={<Categories/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
