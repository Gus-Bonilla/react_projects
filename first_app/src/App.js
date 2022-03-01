import React from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import Counter from "./components/Counter";
import Form from "./components/Form";
import Counter_hooks from "./components/Counter_hooks";
import UseEffect_hook from "./components/UseEffect_hook";
import Seconds_counter_hooks from "./components/Seconds_counter_hooks";


const Test_2 = function(){
    return <p>This is a test!</p>;
};

const App_2 = () => {
    return (
        <div>
            <h1>Hello!</h1>
            <Test />
        </div>);
};

const Header_2 = () => {
    return <h1>Click the button :)</h1>;
};

function sayHello(){
    console.log("Hi xD");
}

class App extends React.Component{
    render(){
        //return <h1>Hello World!</h1>;
        //return <Test />;
        return (
        <div>
            <Header text="Just Click the button!"/>
            <Button label="I'm a button xD"/>
            <Header text="Measuring the time you spend on this page:"/>
            <Counter />
            <Header text="Handling forms!"/>
            <Form />
            <Header text="Counting clicks again but with hooks:"/>
            <Counter_hooks />
            <Header text="Use of useEffect hook:"/>
            <UseEffect_hook />
            <Header text="Measuring the time you spend on this page again but with hooks:"/>
            <Seconds_counter_hooks />
        </div>);
    }
}

class Test extends React.Component{
    render(){
        return <p>This is a test!</p>;
    }
}

class Button_2 extends React.Component{
    render(){
        return <button onClick={sayHello}>Click me!</button>;
    }
}

export default App;
