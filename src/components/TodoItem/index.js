import React from 'react';

class TodoItem extends React.Component {
	render() {
		const { text } = this.props;

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