import React from 'react';
import TodoList from './../containers/TodoList';
import Input from './../containers/Input';


class App extends React.Component{

	render(){
		return(
			<div>
				<Input />
				<TodoList />
			</div>
		);
	}
}

export default App;