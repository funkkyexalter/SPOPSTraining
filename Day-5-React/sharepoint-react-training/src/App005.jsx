import './App.css';
import React from 'react';
import  ReactDOM from 'react-dom'

 

class App extends React.Component {
    constructor(){
        super();
       
        this.findDomNodeHandler=this.findDomNodeHandler.bind(this);
    };
    findDomNodeHandler(){
       var myDIv=document.getElementById("myDiv");
       ReactDOM.findDOMNode(myDIv).style.color='red';
    };
    render() {
        return (
            <div>
               <button onClick={this.findDomNodeHandler}>Find Dom Node</button>
               <div id="myDiv">Node</div>
            </div>
        );
    }
}

 

export default App;