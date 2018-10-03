import React from 'react';

class TodoItem extends React.Component {
	state = {
		isEditing: false
	}
	onSave = (e, oldText) => {
		e.preventDefault();
		const newText = this._textInput.value;
		this.props.saveItem(oldText, newText)
		this.setState({
			isEditing: !this.state.isEditing
		})
	}
	onClick = (id) => {
		this.props.deleteItem(id)
	}
	onEditClick = () => {
		this.setState({
			isEditing: !this.state.isEditing
		})
	}
	componentDidUpdate() {
		console.log()
		if (this._textInput) {
			this._textInput.focus()
		}
	}
	render() {
		const { id, text } = this.props;

		return (
			<li >
				{
					this.state.isEditing
						? <form>
							<input type="text" defaultValue={text} ref={(input) => { this._textInput = input; }} />
							<button type="submit" onClick={(e) => this.onSave(e, text)} >Save</button>
						</form>
						: <div>
							{text}
							<button onClick={this.onEditClick} >Edit </button>
							<button onClick={() => this.onClick(id)} >Delete</button>
						</div>

				}
		);
	}
}




export default TodoItem;