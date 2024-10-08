import React from 'react'
import ButtonAppBar from './ButtonAppbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Chats from '../pages/Chats'
import UserProvider, {useUser} from '../contexts/UserContext'
import getEnv from '../utility/getEnv'

const Home = () => <div> Home Page</div>
const Contact = () => <div> Contact Page</div>
const About = () => <div> About Page</div>
  
const App = () => {
    console.log(getEnv('VITE_SERVER_URL'))
  return (
    <div>
         <Router>
      <UserProvider>
            <ButtonAppBar/>
                  <Routes>
                    <Route path ='/' element={<Home />} />
                    <Route path ='/contact' element={<Contact />} />
                    <Route path ='/about' element={<About />} />
                    <Route path ='/login' element={<Login/>} />
                    <Route path ='/register' element={<Register/>} />
                    <Route path ='/chats' element={<Chats/>} />
                    </Routes>
    </UserProvider>
            </Router>
        
   </div>
  )
}

export default App