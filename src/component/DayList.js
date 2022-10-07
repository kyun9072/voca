import { useState } from "react"
import dummy from "../db/data.json"
import Day from "./Day";

export default function DayList(){
    const [day, setDay] = useState();
    function changeName(name){
        setDay(name);
    }
    return (
        <div>
        <ul className="list_day">
            {dummy.days.map(day=>(
                <li key={day.id} onClick={()=>{
                    changeName(day.id)
                }}>Day {day.day}</li>   
            ))}
        </ul>
      
        <Day day={day} />
        </div>
    )
}