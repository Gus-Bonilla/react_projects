import React, {useEffect, useState} from "react";
import List from "./List";
import axios from "axios";


const Search_wp = () => {
    const [value, setValue] = useState("");
    const [results, setResults] = useState([]);

    useEffect(() => {
        let timerId = null;

        if(value){
            timerId = setTimeout(async () => {
                const {data} = await axios.get("https://en.wikipedia.org/w/api.php", {
                    params: {
                        action: "query",
                        list: "search",
                        origin: "*",
                        format: "json",
                        srsearch: value
                    }
                });
                
                setResults(data.query.search);
            }, 2000);
        } else {
            setResults([]);
        }
    
        return (() => {
            clearTimeout(timerId);
        });
    }, [value]);

    return (
        <div>
            <form className="ui form">
                <input 
                    type = "text"
                    placeholder = "Search on Wikipedia..."
                    value = {value}
                    onChange = {(event) => setValue(event.target.value)}
                />
            </form>
            <List results={results} />
            <br />
        </div>
    );    
};

export default Search_wp;
