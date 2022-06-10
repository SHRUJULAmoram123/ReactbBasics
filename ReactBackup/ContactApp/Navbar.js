import React,{Component} from "react"
import{Link} from "react-router-dom"
class Navbar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/home" className="navbar-brand">React ContactAPP</Link>
        <div className="ml-auto">
            <ul className="navbar-nav">
                <li className="nav-item"><Link  className="nav-link"to="/contact">ContactApp</Link></li>
            </ul>
        </div>
          </nav>
        )
    }
}
export default Navbar