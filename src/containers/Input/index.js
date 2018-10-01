import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = store =>({

})
const mapDispatchToProps = dispatch => ({
	
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
	render(){
		return(
			<form className="main-input" >
				<input type="text" value={this.state.value} onChange={this.onChange} />
			</form>
		);
	}
}

export default connect( mapStateToProps, mapDispatchToProps )(Input);