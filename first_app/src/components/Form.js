import React from "react";

class Form extends React.Component{
    constructor(){
        super();
        this.state = {value: "Write your name."};
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("Somthing was submited.");
        let value = document.querySelector("#name").value;
        alert(this.state.value + " was submited.");
    }

    handleImputChange(event){
        this.setState({value: event.target.value.toUpperCase()});
    }
    
    render(){
        return (
            <form onSubmit={this.handleFormSubmit}>
                <input id="name" type="text" value={this.state.value} onChange={(event) => this.handleImputChange(event)} />
                <input type="submit" />
            </form>
        );
    }
}

export default Form;