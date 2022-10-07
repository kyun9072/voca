import { useState } from "react";
import UserName from "./UserName";

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
            <p>이름이 위에선 state, 아래에선 props 로 사용됨</p>
            <UserName name={name}/>
        </div>
    )
}

export default State;