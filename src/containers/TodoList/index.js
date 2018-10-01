import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './../../actions';
import TodoItem from './../../components/TodoItem'
import { deleteItem } from './../../actions'
import { refreshItem } from './../../actions'

const mapStateToProps = store => ({
	items: store.items
});

const mapDispatchToProps = dispatch => ({
	deleteItem : (items) => dispatch(deleteItem(items)),
	refreshItem: (items) => dispatch(refreshItem(items))
})



class TodoList extends React.Component{
	deleteItem = id =>{
		let filtered = this.props.items.filter( (item) => item.id !== id );
		this.props.deleteItem(filtered)
	}
	onSave = text => {
		let destination = this.props.items.find(item => item.text == text);
		destination.text = text;
		this.props.refreshItem(this.props.items);
	}

	render(){
		return(
			<ul>
				{this.props.items.map(item => 
					<TodoItem key={item.id}  id={item.id} text={item.text} deleteItem={this.deleteItem} saveItem={this.onSave} />
					)}
			</ul>			 
		);
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(TodoList);