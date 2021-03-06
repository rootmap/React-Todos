import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {

	markComplete = (e) =>{
		console.log(this.props)
	}



  	render(){
	  return this.props.todos.map((todo)=>(
	  		<TodoItem key={todo.id} todo={todo} delTodo={this.props.delTodo} markComplete={this.props.markComplete} />
	  ));
	}

  
}

Todos.propTypes = {
	todos: PropTypes.array.isRequired,
	markComplete: PropTypes.func.isRequired,
	delTodo: PropTypes.func.isRequired
}

export default Todos;
