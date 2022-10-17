// import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import useFetch from "../hooks/useFetch";
// import dummy from "../db/data.json"

export default function DayList(){
    const days = useFetch('http://localhost:3001/days');
    // const [days, setDays] = useState([]);
    // #. 상태값이 바뀔때 동작하는 함수 생성
    // #. 두번째 배열에 카운트를 넣음으로 카운트의 state가 변경될 때만 동작 , 의존성 배열
    // #. 빈배열이면 최초 한번만 실행됨.
    // useEffect(()=>{
    //     // #.promise 반환
    //     fetch('http://localhost:3001/days')
    //     .then(res=> {   // #. response를 받아서 json으로 변환( 변환전은 html 문서임)
    //         return res.json()
    //     })
    //     .then(data=>{   // #. 리턴받은 데이터를 사용해서 days 초기화
    //         setDays(data)
    //     })
    // },[])

     return (
        <div>
        <ul className="list_day">
            {days.map(day=>(
                <li key={day.id}> <Link to={`/day/${day.day}`}>Day {day.day} </Link>
                    </li>   
            ))}
        </ul>
        </div>
    )
}