import React from "react";

 

export default class Todo extends React.Component {
    render() {
        return (
            <div>
                <input type="text" ref='input' />
                <button onClick={(e) => this.handleClick(e)}>Add</button>
            </div>

 

        );
    }
    handleClick(e) {
        const node = this.refs.input;
        const text = node.nodeValue;
        this.props.onAddClick(text);
        node.nodeValue = '';
    }
}