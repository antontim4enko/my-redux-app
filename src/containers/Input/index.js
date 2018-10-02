import React from 'react';
import { connect } from 'react-redux';
import { setInputValue } from './../../actions';

const mapStateToProps = store =>({
	inputValue: store.input
})
const mapDispatchToProps = dispatch => ({
	setInputValue: (inputValue) => dispatch(setInputValue(inputValue))
});



class Input extends React.Component{
	state = {
		value: ""
	};
	onFind = e => {
		e.preventDefault();
	}
	onChange = (e) =>{
		this.setState({
			value: e.currentTarget.value
		})
		this.props.setInputValue(e.currentTarget.value)
	}
	render(){
		const { inputValue } = this.props;
		return(
			<form className="main-input" >
				<input type="text" value={this.state.value} onChange={this.onChange} />
				
			</form>
		);
	}
}

export default connect( mapStateToProps, mapDispatchToProps )(Input);