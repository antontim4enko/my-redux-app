import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './../../actions';
import { setInputValue } from './../../actions';

const mapStateToProps = store => ({
	inputValue: store.input
});
const mapDispatchToProps = dispatch => ({
	addTodo: (todo) => dispatch(addTodo(todo)),
	setInputValue: (inputValue) => dispatch(setInputValue(inputValue))
});

class Input extends React.Component {
	state = {
		value: ""
	};
	onFind = e => {
		e.preventDefault();
	}
	onChange = (e) => {
		this.setState({
			value: e.currentTarget.value
		})
		this.props.setInputValue(e.currentTarget.value)
	}
	onAdd = e => {
		e.preventDefault();
		if (this.state.value.trim()) {
			let newItem = {
				id: +new Date(),
				text: this.state.value
			}
			this.props.addTodo(newItem);
			this.setState({
				value: ""
			})
		}

	}
	render() {
		const { inputValue } = this.props;
		return (
			<form className="main-input" >
				<input type="text" value={this.state.value} onChange={this.onChange} />
				<button onClick={this.onAdd} type="submit">Add</button>
			</form>
		);
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Input);