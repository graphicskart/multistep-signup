import React from 'react'
import {  Link } from 'react-router-dom'
import axios from 'axios'
import {signup} from '../../modules/auth'
import { connect } from 'react-redux'
import {IsValidForm} from '../../components/common/validation'
import {  Col, FormControl, FormGroup, Button, Checkbox, Modal, FieldGroup } from 'react-bootstrap'

import StepHeader from '../../components/layout/stepsHeader'
import SignupSidebar from './signupSidebar'

class Signup extends React.Component{
	constructor(props){
		super(props);

		this.state={
			form: {
		        email: '',
		        first_name: '',
		        last_name: '',
		        phone: '',
		        gender: '',
		        location: '',
		        mobile: '',
		        new_password: ''
		       },
		    show: false,
		    errors:{}
		}

	}
	onChange = (key,e) => {
		let {form} = this.state;
		form[key] = e.target.value
		
	}

    onSubmit(){
		this.props.history.push('/home')
	}



	render(){
		let close = () => this.setState({ show: false });
		return(
			<div className="signupContainer final_step_con">
				<StepHeader step="Final Step" />
				<div className="signupPanel">
					<div className="final_step">
						<h3>THANK YOU</h3>
						<p>Our sales team will get in touch with you within 48 Hours. Please recive our confirmation call</p>
						<Button type="button" onClick={this.onSubmit.bind(this)}>DONE</Button>
					</div>
				</div>
			</div>
		)
	}
}

export default connect(state => ({
  auth: state.auth,
}, mapDispatch))(Signup);


const mapDispatch = (dispatch) => {
    const allActionProps = Object.assign({}, dispatch);
    return allActionProps;
}