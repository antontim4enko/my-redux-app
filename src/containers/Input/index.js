import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './../../actions';

const mapStateToProps = store =>({

})
const mapDispatchToProps = dispatch => ({
	addTodo: (todo) => dispatch(addTodo(todo))
});



class Input extends React.Component{
	state = {
		value: ""
	}
	onChange = (e) =>{
		this.setState({
			value: e.currentTarget.value
		})
	}
	onAdd = e =>{
		e.preventDefault();
		if(this.state.value.trim()){
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

	render(){
		return(
			<form>
				<input type="text" value={this.state.value} onChange={this.onChange} />
				<button onClick={this.onAdd} type="submit">Add</button>
			</form>
		);
	}
}

export default connect( mapStateToProps, mapDispatchToProps )(Input);