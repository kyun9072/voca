import { useState } from "react";

const State = () => {
    const [name, setName] = useState("Mike");
    function changeName() {
        // const newName = name === "Mike" ? "Jane" : "Mike";
        setName(name === "Mike" ? "Jane" : "Mike");
    }
    return (
        <div>
            <h1>State</h1>
            <h2>{name}</h2>
            <button onClick={changeName}>Change</button>
            <button onClick={()=>{
                changeName(setName(name === "Mike" ? "Jane" : "Mike"));
            }}>CHANGE</button>
        </div>
    )
}

export default State;