import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './../../actions';
import PropTypes from 'prop-types';


const mapStateToProps = store => ({
	items: store.items
});




class TodoList extends React.Component{
	render(){
		return(
			<ul>
				{this.props.items.map(item => <li key={item.id} >{item.text}</li>)}
			</ul>			 
		);
	}
}

TodoList.PropTypes = {
	items: PropTypes.array.isRequired
}


export default connect(mapStateToProps)(TodoList);