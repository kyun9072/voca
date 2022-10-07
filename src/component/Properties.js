
// function Props(){
//     return (
//         <div>
//             <h3></h3>
//         </div>
//     )
// }

import { useState } from "react"

export default function Props(props) {
    const [age, setAge] = useState(props.age)

    return (
        <div>
            <h1>Props:Properties</h1>
            <h2>props.age = {props.age}</h2>
            <h2>state age = {age}</h2>
            <button onClick={()=>{
                setAge(age+1)
            }}>Sum</button>
            <button onClick={()=>{
                setAge(props.age)
            }}>Reset</button>
            <span>프로퍼티로 받은 값은 readOnly, state로 받아서 컴포넌트안에서 재사용은 가능함</span>
        </div>
    )
};