import './App.css';
import Hello from './component/Hello'
import Welcome from './component/Welcome';
import World from './component/World';
import State from './component/State';
import styles from './App.module.css'
import Props from './component/Properties';
import EventHandle from './component/EventHandle';
import UserName from './component/UserName';

function App() {
 
  return  <div className="App">
    <Hello/>
    <World/>
    <div className={styles.box}>App.JS</div>
    <Welcome/>
    <EventHandle/>
    <State/>
    <Props age={30}/>
    <UserName name={"이름"}/>
  </div>
      
}

export default App;
