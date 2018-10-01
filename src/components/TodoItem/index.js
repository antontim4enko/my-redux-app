import React from 'react';

class TodoItem extends React.Component {
	render() {
		const { id, text } = this.props;

		return (
			<li className="todoItem" >
				<div>
					{text}

				</div>
			</li>
		);
	}
}


export default TodoItem;