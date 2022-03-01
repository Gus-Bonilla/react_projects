import React, {useState} from "react";

const Counter_hooks = () => {
    const [clicks, setClicks] = useState(0);

    function handleButtonClick(){
        setClicks(clicks+1);
    }

    return (
        <div>
            <span>You clicked {clicks} clicks</span>
            <br />
            <button onClick={handleButtonClick}>Click me!</button>
        </div>
    );    
};

export default Counter_hooks;