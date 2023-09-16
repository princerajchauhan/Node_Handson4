import { useState, useEffect } from 'react';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Main from './Components/Main';
import Signup from './Components/Signup';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  const [user, setLoginUser] = useState({})

  useEffect(()=>{
    setLoginUser(JSON.parse(localStorage.getItem("user")))
  }, [])

  const updateUser = (data) =>{
    localStorage.setItem("user", JSON.stringify(data))
    setLoginUser(data)
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/home' element={user && user.Email ? <Home updateUser = {updateUser} user={user} /> : <Login updateUser = {updateUser} />} />
          {/* <Route path='/login' element={<Login updateUser = {updateUser} />} /> */}
          <Route path='/login' element={user && user.Email ? <Home updateUser = {updateUser} user={user} /> : <Login updateUser = {updateUser} />} />
          <Route path='/register' element={<Signup updateUser = {updateUser} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
