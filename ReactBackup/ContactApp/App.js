import React from 'react'
import Navbar from './navbar/Navbar'
import Home from './ContactApp/Home'
import ContactApp from './ContactApp/ContactApp'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
class App extends React.Component {
    render() {
        return <React.Fragment>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/contact" element={<ContactApp/>} />
                </Routes>
            </Router>
        </React.Fragment>
    }
}
export default App