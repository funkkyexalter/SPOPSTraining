import React from "react";
import PropTypes from 'prop-types';
 
import Todo from "./AddTodo";
 
export default class TodoList extends React.Component {
    render() {
        return (
            //{ this.props.todos.map(todo => <Todo key={todo.id} {...todo} />) }
            <ul>{ this.props.todos.map(todo => <Todo key={todo.id} {...todo} />) }</ul>
        );
    }
}