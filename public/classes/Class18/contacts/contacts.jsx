console.log("hello universe")

var container = document.querySelector("#container");

// Contact component
var Contacts = React.createClass({

	getInitialState: function() {
	    return {
	        name: 'Anna'
	    };
	},

	changeContact: function() {
		this.setState({ name: 'Chris' });
	},

	render: function() {
		// retrun of the render method
		// is JSX syntax
		return (
			<div className="contacts">
				<h1>Contacts</h1>
				<div className="wrapper">
					<ContactList 
						changeHandler={this.changeContact}
					/>

					<ContactDetails 
						name={ this.state.name }
						phone="214-803-4614"
						email="jill.wagner@gmail.com"
					/>
				</div>
			</div>
		)
	}

});

// Contact List component
var ContactList = React.createClass({

	render: function() {
		return (
			<ul className="list" onClick={this.props.changeHandler}>
				<li>Jack</li>
				<li>Jess</li>
				<li>Joe</li>
			</ul>
		)
	}
});

// Contact Details component
var ContactDetails = React.createClass({

	render: function() {
		return (
			<div className="details">
				<p>Details</p>

				<h2>{this.props.name}</h2>
				<p>Phone: {this.props.phone}</p>
				<p>Email: {this.props.email}</p>
			</div>
		)
	}


});

// Render the root component in the DOM
ReactDOM.render(<Contacts />, container)