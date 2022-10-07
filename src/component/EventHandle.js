import { useState } from "react";

const EventHandle = ()=> {
    let [name, setName] = useState("?");    
    let [age, setAge] = useState(0);    
    let [text, setText] = useState();    
    function showName(args){
        console.log('mike');
        // 호출은 이미 확인했으니 useState 사용      
        name = setName(args);
    };

    const showAge =(age)=>{
        console.log(age);
        age = setAge(age);
    }
    const showText =(e)=>{
        console.log(e.target.value);
        text = setText(e.target.value);
    }
    return ( 
        <div>
            <h1>Event</h1>
            <button onClick={()=>{
                showName('Mike')}
                }>Show name</button>
            <h3>My name is {name} </h3>
            <button onClick={()=>{
                showAge(10);
            }}>Show age</button>
             <h3 id = "name">{age} years old</h3>
            <br/>
            <input type="text" onChange={showText} />
            <h3>입력값 : {text}</h3>
        </div>
    )
}

export default EventHandle;