import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './../../actions';
import TodoItem from './../../components/TodoItem';
import { deleteItem } from './../../actions';
import { refreshItem } from './../../actions';
import { setCategory } from '../../actions';
import TodoItem from './../../components/TodoItem';
import { setCategory } from '../../actions';

const mapStateToProps = store => ({
	items: store.items
		.filter(item => item.text.toLowerCase().includes(store.input.toLowerCase()))
		.filter(item => item.category.includes(store.category)),
	inputValue: store.input,
});
const mapDispatchToProps = dispatch => ({
	deleteItem: (items) => dispatch(deleteItem(items)),
	refreshItem: (items) => dispatch(refreshItem(items)),
	setCategory: category => dispatch(setCategory(category))
});

class TodoList extends React.Component {
	deleteItem = id => {
		let filtered = this.props.items.filter((item) => item.id !== id);
		this.props.deleteItem(filtered)
	}
	categoryToggle = (e) => {
		console.log(e.target.textContent);
		this.props.setCategory(e.target.textContent);
	}
	onSave = (oldText, newText) => {
		let destination = this.props.items.find( item => item.text == oldText);
		destination.text = newText;
		this.props.refreshItem(this.props.items);
	}
	allCategoryToggle = () => {
		this.props.setCategory("");
	}
});
		return (
			<div>
				<button onClick={this.categoryToggle} >Products</button>
				<button onClick={this.categoryToggle} >Apps</button>
				<button onClick={this.categoryToggle} >TV</button>
				<button onClick={this.allCategoryToggle} >All</button>
				<ul>
					{this.props.items.map(item =>
						<TodoItem key={item.id} id={item.id} text={item.text} deleteItem={this.deleteItem} saveItem={this.onSave} />)
					}

					)}
				</ul>
			</div>
		);

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);