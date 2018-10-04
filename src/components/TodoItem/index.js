import React from 'react';
import './style.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
	onCheckboxToggle = id => {
		this.props.onCheckboxToggle(id);
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
			<ReactCSSTransitionGroup
				transitionName="fade"
				transitionAppear={true}
				transitionAppearTimeout={500}
				transitionEnter={false}
				transitionLeave={true}
				transitionLeaveTimeout={300} >

				<li className={this.state.isEditing ? "todo-item-editing" : "todo-item"}>
					{
						this.state.isEditing
							? <form>
								<input type="text" defaultValue={text} ref={(input) => { this._textInput = input; }} />
								<button type="submit" onClick={(e) => this.onSave(e, text)} >Save</button>

							</form>
							:
							<div>
								<label>
									<input onChange={() => this.onCheckboxToggle(id)} type="checkbox" checked={this.props.isFinished} />
									{text}
								</label>
							</div>

					}
					{!this.state.isEditing
						? <div>
							<button className="controll-btn" onClick={this.onEditClick} ><i className="fa fa-pencil-alt" ></i> </button>
							<button className="controll-btn" onClick={() => this.onClick(id)} ><i className="fa fa-trash-alt" ></i> </button>
						</div>
						: ''
					}


				</li>
			</ReactCSSTransitionGroup>
		);
	}
}




export default TodoItem;