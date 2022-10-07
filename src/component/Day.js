import dummy from "../db/data.json"

export default function Day({day}){
    // console.log(day);
    const propDay = day;
    const wordList = dummy.words.filter(word => (
        word.day === propDay
    ));
    // console.log(propDay);
    // console.log(wordList);
    return <>
        <table>
            <tbody>
            {wordList.map(word=>(
                <tr key={word.id}>
                    <td>{word.eng}</td>
                    <td>{word.kor}</td>
                </tr>
            ))}

            </tbody>

        </table>
    </>
}