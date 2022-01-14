import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddAmount from './components/AddAmount'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Signup from './components/Signup'

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/add-amount" element={<AddAmount />} />
            </Routes>
        </Router>
    )
}

export default App
