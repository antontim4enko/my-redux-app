import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './../../components/TodoItem'


const mapStateToProps = store => ({
	items: store.items
});

const mapDispatchToProps = dispatch => ({
})



class TodoList extends React.Component{
	

	render(){
		const { items } = this.props.items;
		return(
			<ul>
				{items.map(item => 
					<TodoItem key={item.id}  id={item.id} text={item.text}  />
					)}
			</ul>			 
		);
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(TodoList);