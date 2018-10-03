import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './../../actions';
import { setInputValue } from './../../actions';
import { setInputValue } from './../../actions';

const mapStateToProps = store =>({
	inputValue: store.input
})
const mapDispatchToProps = dispatch => ({
	setInputValue: (inputValue) => dispatch(setInputValue(inputValue)),
  addTodo: (todo) => dispatch(addTodo(todo))
});

class Input extends React.Component {
	state = {
		value: "",
		searchValue: ""
	};
	onChange = (e) =>{
		this.setState({
			value: e.currentTarget.value
		})
	}
	onAdd = e => {
		e.preventDefault();
		if (this.state.value.trim()) {
			let newItem = {
				id: +new Date(),
				text: this.state.value,
				category: "New"
			}
			this.props.addTodo(newItem);
			this.setState({
				value: ""
			})
		}

	}
	onSearch = (e) => {
		this.setState({
			searchValue: e.currentTarget.value
		})
		this.props.setInputValue(e.currentTarget.value)
	}
	render() {
		const { inputValue } = this.props;
		return (
			<form className="main-input" >
				<div>
					<input type="text" value={this.state.value} onChange={this.onChange} placeholder="Enter task" />
					<button onClick={this.onAdd} type="submit">Add</button>
				</div>
				<input type="text" value={this.state.searchValue} onChange={this.onSearch} placeholder="Enter search value" />
    );
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Input);