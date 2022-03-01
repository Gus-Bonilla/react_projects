import React, {useState, useEffect} from "react";

const Seconds_counter_hooks = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCounter(counter => counter+1);
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    useEffect(() => {
        console.log("Called everytime!");
        
        return () => {
            console.log("Called before unmounting!");
        }
    }, []);

    return (
        <div>
            <span>You have spent {counter} seconds here.</span>
            <br />
        </div>
    );    
};

export default Seconds_counter_hooks;
