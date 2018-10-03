import React from 'react';
import { connect } from 'react-redux';
import { addTodo, checkboxToggle } from './../../actions';
import TodoItem from './../../components/TodoItem';
import { deleteItem } from './../../actions';
import { refreshItem } from './../../actions';
import { setCategory } from '../../actions';
import TodoItem from './../../components/TodoItem';
import { setCategory } from '../../actions';

const mapStateToProps = store => ({
	items: store.items
		.filter(item => item.text.toLowerCase().includes(store.input.toLowerCase())),
	inputValue: store.input,
});
const mapDispatchToProps = dispatch => ({
	deleteItem: (items) => dispatch(deleteItem(items)),
	refreshItem: (items) => dispatch(refreshItem(items)),
	setCategory: category => dispatch(setCategory(category)),
	checkboxToggle: items => dispatch(checkboxToggle(items))
});

class TodoList extends React.Component {
	state = {
		arr : [1,2,3,4,5,6]
	}
	deleteItem = id => {
		let filtered = this.props.items.filter((item) => item.id !== id);
		this.props.deleteItem(filtered);
	}
	onSave = (oldText, newText) => {
		let destination = this.props.items.find( item => item.text == oldText);
		destination.text = newText;
		this.props.refreshItem(this.props.items);
	}
	onCheckboxToggle = id => {
		let destination = this.props.items.find( item => item.id === id);
		destination.isFinished = !destination.isFinished;
		this.props.checkboxToggle(this.props.items)
	}
	componentDidUpdate() {
		localStorage.setItem('localItems', JSON.stringify(this.props.items));
	}
});
		return (
			<div>
				
				<ul>
					{this.props.items.map(item =>
						<TodoItem onCheckboxToggle={this.onCheckboxToggle} isFinished={item.isFinished} key={item.id} id={item.id} text={item.text} deleteItem={this.deleteItem} saveItem={this.onSave} />)
					}

					)}
				</ul>
			</div>
		);

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);