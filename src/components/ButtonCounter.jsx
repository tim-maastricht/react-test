import React from "react";


export default class ButtonCounter extends React.Component {

	// Don't do this for component data, 
	// class instance variables do not scale or optimise nicely
	// with the rest of React's systems
	// counterValue = 0;

	constructor(){
		// super() must run first in the constructor,
		// this enables React.Component and all of its crazy internals
		// to be ready for us to use 
		super();

		this.state = {
			counter: 0
		}

		// This enables the "this" keyword to work inside the function
		this.counterGoUp = this.counterGoUp.bind(this);
	}

	counterGoUp () {
		// this is bad, but just in here so we can quickly use the function
		// this.state.counter = this.state.counter + 1;
		this.setState({counter: this.state.counter + 1})
		console.log("counter go up!!!")
	}

  componentDidMount(){
    // this function runs automatically when react first loads this component
    console.log("Button counter has rendered for the first time")
    // app runs once for strict mode
    // then secondly after strict mode
  }

  componentWillUnmount(){
    console.log("button counter is being removed from the page")
  }

  componentDidUpdate(){
    console.log("Button counter value is " + this.state.counter);
  }

	render(){
		// Render the button!!!!
		return(
			<div className="buttoncounter-container">
				<button onClick={this.counterGoUp}>
					Count is {this.state.counter}
				</button>
			</div>
		)
	}

}