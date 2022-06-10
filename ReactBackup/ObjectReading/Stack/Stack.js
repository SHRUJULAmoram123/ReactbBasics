import React from 'react'
class Stack extends React.Component{
    message="Good Morning"
    ename="shrujula"
    render(){
        return<div>
            <h2>Message Component</h2>
            <hr/>
            <h4>message:{this.message}</h4>
            <h3>employee name:{this.ename}</h3>
        </div>

    }
}
export default Stack