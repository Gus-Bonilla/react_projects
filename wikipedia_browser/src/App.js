import React from "react";
import Header from "./components/Header";
import Search_wp from "./components/Search_wp";


class App extends React.Component{
    render(){
        return (
        <div className="ui grid container center aligned">
            <div className="column eight wide">
                <br />
                <Header text="Browser for Wikipedia Articles"/>
                <Search_wp />
            </div>
        </div>);
    }
}

export default App;
