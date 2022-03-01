import React from "react";

class Button extends React.Component{
    constructor(){
        super();
        this.state = {counter: 0};
    }

    handleButtonClick = () => {
        this.setState({counter: this.state.counter+1});
    }

    render(){
        //return <button onClick={sayHello}>{this.props.label}</button>;
        return <button onClick={this.handleButtonClick}>{this.state.counter}</button>;
    }
}

function sayHello(){
    console.log("Hi again xD");
}

export default Button;