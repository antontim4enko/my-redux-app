import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './../../components/TodoItem';
import { setCategory } from '../../actions';


const mapStateToProps = store => ({
	items: store.items
		.filter(item => item.text.toLowerCase().includes(store.input.toLowerCase()))
		.filter(item => item.category.includes(store.category)),
	inputValue: store.input,

});

const mapDispatchToProps = dispatch => ({
	setCategory: category => dispatch(setCategory(category))
});



class TodoList extends React.Component {
	categoryToggle = (e) => {
		console.log(e.target.textContent);
		this.props.setCategory(e.target.textContent);
	}
	allCategoryToggle = () => {
		this.props.setCategory("");
	}
	render() {

		return (
			<div>
				<button onClick={this.categoryToggle} >Products</button>
				<button onClick={this.categoryToggle} >Apps</button>
				<button onClick={this.categoryToggle} >TV</button>
				<button onClick={this.allCategoryToggle} >All</button>
				<ul>
					{this.props.items.map(item =>
						<TodoItem key={item.id} text={item.text} />
					)}
				</ul>
			</div>
		);
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(TodoList);