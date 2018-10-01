import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './../../components/TodoItem'


const mapStateToProps = store => ({
	items: store.items.items.filter( item => item.text.toLowerCase().includes(store.input.inputValue.toLowerCase())),
	inputValue: store.input.inputValue
});

const mapDispatchToProps = dispatch => ({
})



class TodoList extends React.Component {
	

	render() {
		
		return (
			<ul>
				{this.props.items.map(item =>
					<TodoItem key={item.id} text={item.text} />
				)}
			</ul>
		);
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(TodoList);