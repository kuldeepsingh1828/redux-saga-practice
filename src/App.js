import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import User from './components/User'
import Contact from './components/Contact'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function App() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<h1>Home Page</h1>} />
                    <Route path='/users' element={<User />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
                <Footer />
            </Router>
        </>
    )
}
