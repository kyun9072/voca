// import World from "./World";
import styles from "./Hello.module.css"

const Hello = () => {

    return (
        <div>
            <h1 style={{
                color :"green",
                border:'2px solid #000',
                marginBottom:"50px",
                opacity:1,
            }}>Hello
            </h1>
            <div className={styles.box}>Hello</div>
        </div>
       
    )
}

export default Hello;

// export default function Hello() {
//     <p>Hello</p>
// }