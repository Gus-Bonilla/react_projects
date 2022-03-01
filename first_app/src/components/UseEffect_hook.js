import React, {useEffect} from "react";

const useEffect_hooks = () => {
    let testVar = 0;

    useEffect(() => {
        console.log("useEffect used :)");
    }, [testVar]);

    return (
        <div>
            <span>We are using useEffect :)</span>
            <br />
        </div>
    );    
};

export default useEffect_hooks;