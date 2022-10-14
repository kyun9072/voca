import dummy from "../db/data.json"
import { useParams } from "react-router-dom";
import Word from "./Word";

export default function Day(){
    // console.log(day);
    // const propDay = day;
    // const wordList = dummy.words.filter(word => (
    //     word.day === propDay
    // ));
    const param = useParams();
    const day = param.day;
    console.log(day);
    const wordList = dummy.words.filter(word => (
        word.day === Number(day)
    ));
    return <>
    <h2>Day {day}</h2>
        <table>
            <tbody>
            {wordList.map(word=>(
               <Word word={word} key={word.id}/>
            ))}

            </tbody>

        </table>
    </>
}