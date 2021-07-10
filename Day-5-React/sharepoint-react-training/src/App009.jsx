import './App.css';
import React from 'react';
import ReactDOM from 'react-dom'
 
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            age: null,
        }
        this.changeHandler = this.changeHandler.bind(this);
    };
    changeHandler(e) {
        let name = e.target.name;
        let val = e.target.value;
        console.log(name);
        if (name == "age") {
            if (!Number(val)) {
                console.log(val);
                alert("Your age must me a number");
            }
        }
        this.setState({ [name]: val });
 
    }
    render() {
        return (<form>
            <h1>Hello ! {this.state.username} and my Age is {this.state.age}</h1>
            <p>Enter Your Name:</p>
            <input type="text" name="username" onChange={this.changeHandler} />
            <p>Enter Your Age:</p>
            <input type="text" name="age" onChange={this.changeHandler} />
        </form>);
    }
}
 
 
export default App;