import React from "react"
import{Link} from "react-router-dom"
class Navbar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/home" className="navbar-brand">React form handling example</Link>
        <div className="ml-auto">
            <ul className="navbar-nav">
                <li className="nav-list"><Link to="/Home" className="nav-link">Home</Link></li>
                <li className="nav-list"><Link to="/About" className="nav-link">About</Link></li>
                <li className="nav-list"><Link to="/Contact" className="nav-link">Contact</Link></li>
            </ul>
        </div>
          </nav>
        )
    }
}
export default Navbar