import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './../../actions';
import TodoItem from './../../components/TodoItem'
import { deleteItem } from './../../actions'


const mapStateToProps = store => ({
	items: store.items
});

const mapDispatchToProps = dispatch => ({
	deleteItem : (items) => dispatch(deleteItem(items))
})



class TodoList extends React.Component{
	deleteItem = id =>{
		let filtered = this.props.items.filter( (item) => item.id !== id );
		this.props.deleteItem(filtered)
	}

	render(){
		return(
			<ul>
				{this.props.items.map(item => 
					<TodoItem key={item.id}  id={item.id} text={item.text} deleteItem={this.deleteItem} />
					)}
			</ul>			 
		);
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(TodoList);