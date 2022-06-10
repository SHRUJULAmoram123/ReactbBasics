import React from 'react'
class Navbar extends React.Component{
    render(){
        return<nav className="navbar dark bg-dark" >
            <a href="#" className="navbar-brand">React example</a>
            <div>
                <ul className="navbar-nav">
                 <li className="nav-list">
                    <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-list">
                    <a className="nav-link" href="#">Aboutus</a>
                    </li> 
                    <li className="nav-list">
                    <a className="nav-link" href="#">Contact</a>
                    </li>    
                </ul>
            </div>
        </nav>
            
        
    }
}
export default Navbar
    