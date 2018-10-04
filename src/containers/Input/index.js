import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './../../actions';
import { setInputValue } from './../../actions';
import './style.css';

const mapStateToProps = store => ({

})
const mapDispatchToProps = dispatch => ({
	addTodo: (todo) => dispatch(addTodo(todo))
});

class Input extends React.Component {
	state = {
		value: ""
	};
	onChange = (e) => {
		this.setState({
			value: e.currentTarget.value
		})
	}
	onAdd = e => {
		e.preventDefault();
		if (this.state.value.trim()) {
			let newItem = {
				id: +new Date(),
				isFinished: false,
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
				<input type="text" value={this.state.value} onChange={this.onChange} placeholder="Enter task" />
				<button disabled={this.state.value ? false : true} onClick={this.onAdd} type="submit">Add</button>
			</form>
		);
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Input);