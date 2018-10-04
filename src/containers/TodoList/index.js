import React from 'react';
import { connect } from 'react-redux';
import { addTodo, checkboxToggle } from './../../actions';
import TodoItem from './../../components/TodoItem';
import { deleteItem } from './../../actions';
import { refreshItem } from './../../actions';
import { setCategory } from '../../actions';


const mapStateToProps = store => ({
	items: store.items
});
const mapDispatchToProps = dispatch => ({
	deleteItem: id => dispatch(deleteItem(id)),
	refreshItem: (oldText, newText) => dispatch(refreshItem(oldText, newText)),
	setCategory: category => dispatch(setCategory(category)),
	checkboxToggle: id => dispatch(checkboxToggle(id))
});

class TodoList extends React.Component {
	deleteItem = id => {
		this.props.deleteItem(id);
	}
	onSave = (oldText, newText) => {
		this.props.refreshItem(oldText, newText);
	}
	onCheckboxToggle = id => {
		this.props.checkboxToggle(id)
	}
	componentDidUpdate() {
		localStorage.setItem('localItems', JSON.stringify(this.props.items));
	}
	render(){
		return (
			<div>
				<ul>
					{this.props.items.map(item =>
						<TodoItem onCheckboxToggle={this.onCheckboxToggle} isFinished={item.isFinished} key={item.id} id={item.id} text={item.text} deleteItem={this.deleteItem} saveItem={this.onSave} />)
					}

					
				</ul>
			</div>
		);
	}				
	
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);