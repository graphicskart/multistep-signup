import React from 'react'
import {  Col, FormControl, FormGroup, Button, Checkbox, Row } from 'react-bootstrap'
import SignupSidebar from './signupSidebar'

import '../../index.css'

export default class Signup extends React.Component{
	constructor(props){
		super(props);

		this.state={
			step : 1,
		    stepLoading : false,
		}

	}
	
    onSubmit(){
    	this.setState({step : (this.state.step + 1)})	
	}

	goBack(){
		this.setState({step : (this.state.step - 1)})
	}

	render(){	    
		return(
			<div className="signupContainer">
				<div className="signupPanel">
					<SignupSidebar currentStep={this.state.step}/>
					{this.state.step === 1 ? 
						<div className="rightSidePanel">
							<h4>Create College Profile</h4>
							<div className="signUpForm">
								<form>
									<div className="fileCon">
										<label>Profile Picture</label>
										<div className="fileInner" style={{'backgroundImage' : "url('images/placeholder.png')"}}>
											<FormControl
										      id="formControlsFile"
										      type="file"
										      label="File"
										      help="Example block-level help text here."
										    />
									    </div>
								    </div>
									<FormGroup controlId="formControlsSelect">
								      <FormControl type="text" placeholder="Username"/>
								    </FormGroup>
								    <FormGroup controlId="formControlsSelect">
								      <FormControl type="text" placeholder="Address"/>
								    </FormGroup>
									<FormGroup controlId="formControlsSelect">
								      <FormControl type="text" placeholder="Registration Certification Number"/>
								    </FormGroup>
								    <Button type="button" onClick={this.onSubmit.bind(this)}>
								    	{this.state.stepLoading ? 
								    		<span className="fa fa-spinner"></span>
								    		:
								    		<span>next</span>
								    	}
								    </Button>
								</form>
							</div>
						</div>
						:
						null
					}
					{this.state.step === 2 ?
						<div className="rightSidePanel">
							<h4>Add User Detail</h4>
							<div className="signUpForm">
								<form>
									<Row className="nameFields">
										<Col md={6}>
											<FormGroup controlId="formControlsSelect">
										      <FormControl type="text" placeholder="First Name"/>
										    </FormGroup>								      		
										</Col>
										<Col md={6}>
											<FormGroup controlId="formControlsSelect">
										      <FormControl type="text" placeholder="Last Name"/>
										    </FormGroup>
										</Col>
									</Row>
									<FormGroup controlId="formControlsSelect">
								      <FormControl type="email" placeholder="E-mail Address"/>
								    </FormGroup>
									<FormGroup controlId="formControlsSelect">
								      <FormControl type="text" placeholder="Phone Number" />
								    </FormGroup>
									<FormGroup controlId="formControlsSelect">
								      <FormControl type="text" placeholder="Designation"/>
								    </FormGroup>
								    <Button type="button" className="pull-left backBtn" onClick={this.goBack.bind(this)}>Back</Button>
								    <Button type="button" onClick={this.onSubmit.bind(this)}>
								    	{this.state.stepLoading ? 
								    		<span className="fa fa-spinner"></span>
								    		:
								    		<span>next</span>
								    	}
								    </Button>
								</form>
							</div>
						</div>
						:
						null
					}
					{this.state.step === 3 ?
						<div className="rightSidePanel">
							<h4>Family Detail</h4>
							<div className="signUpForm">
								<form>
									<FormGroup controlId="formControlsSelect">
								      <FormControl type="text" placeholder="Father's Name"/>
								    </FormGroup>
								    <FormGroup controlId="formControlsSelect">
								      <FormControl type="text" placeholder="Mother's Name"/>
								    </FormGroup>
								    <FormGroup controlId="formControlsSelect">
								      <FormControl type="text" placeholder="Father's Occupation"/>
								    </FormGroup>
								    <FormGroup controlId="formControlsSelect">
								      <FormControl type="text" placeholder="Mother's Occupation"/>
								    </FormGroup>									
								    <Button type="button" className="pull-left backBtn" onClick={this.goBack.bind(this)}>Back</Button>
								    <Button type="button" onClick={this.onSubmit.bind(this)}>next</Button>
								</form>
							</div>
						</div>
						:
						null
					}
					{this.state.step === 4 ? 
						<div className="rightSidePanel">
							<h4>Accept Privacy & Terms</h4>
							<div className="signUpForm">
								<div className="signupDetail">
									<div className="logoCon">
										<div className="imageCon"><img src={null} alt="" /></div>
										<div className="detailCon">
											<h5>BIS College</h5>
											<h6>Moda, India</h6>
										</div>
									</div>
								</div>
								<form>
									<div className="checkboxCon">
										<Checkbox name="term_condition"  ref="term_condition">
										  <span></span>
									      Terms & Conditions
									    </Checkbox>
									    <Checkbox ref="privacy_policy" name="privacy_policy">
									      <span></span>
									      Privacy Policy
									    </Checkbox>
								    </div>
								    <Button type="button" className="pull-left backBtn" onClick={this.goBack.bind(this)}>Back</Button>
								    <Button type="button" onClick={this.onSubmit.bind(this)}>confirm</Button>
								</form>
							</div>
						</div>
						:
						null
					}
				</div>
			</div>
		)
	}
}