
import './App.css';
import Navigation from './components/Navigation';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Login from './components/Auth/Login';
import Categories from './components/Categories/Categories';
import Todos from './components/Todos/Todos';
import './'
import NotFound from './components/NotFound';
import AuthProvider from './Contexts/AuthContext';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className='App'>
      <AuthProvider>
      <Router>
        <Navigation/>
        <Routes>
          <Route path='/' element={<ProtectedRoute><Todos/></ProtectedRoute>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='todos' element={<ProtectedRoute><Todos/></ProtectedRoute>}/>
          <Route path='categories' element={<ProtectedRoute><Categories/></ProtectedRoute>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
