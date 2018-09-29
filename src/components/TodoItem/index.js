import React from 'react';

class TodoItem extends React.Component{


	onClick = (id) =>{
		this.props.deleteItem(id)
	}

	render(){
		const { id, text } = this.props;

		return(
			<li onClick={() => this.onClick(id)} >{text}</li>
		);
	}
}

export default TodoItem;