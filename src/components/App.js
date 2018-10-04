import React from 'react';
import TodoList from './../containers/TodoList';
import Input from './../containers/Input';


class App extends React.Component {

	render() {
		return (
			<div className="wrapper">
				<div className="header" ><h1>Todo App</h1></div>
				<Input />
				<TodoList />
			</div>
		);
	}
}

export default App;