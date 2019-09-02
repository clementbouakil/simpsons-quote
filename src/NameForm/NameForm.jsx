import React, { Component } from "react";

class NameForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "Homer Simpson"
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange = event => {
		this.setState({
			name: event.target.value
		});
	};

	handleSubmit = event => {
		alert("A name was submitted : " + this.state.name);
		event.preventDefault();
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<p>{this.state.name}</p>
				<label htmlFor="name">Name :</label>
				<input
					type="text"
					id="name"
					value={this.state.name}
					onChange={this.handleChange}
				/>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

export default NameForm;
