import React from "react"
import{BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Navbar from './navbar/Navbar'
import Home from './DummyComp/Home'
import About from './DummyComp/About'
import Contact from '/DummyComp/Contact'
// import Contact from './DummyComp/Contact'

let App = ()=>{
  return(
    <div>
    <Router>
      <Navbar/>
      <Routes>
                  {/* <Route path="/" component={<Home/>} /> */}
                  <Route path="/Home" element={<Home/>} />
                  <Route path="/About" element={<About/>} />
                  <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </Router>
    </div>
  )
}
export default App