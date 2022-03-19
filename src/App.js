import './App.css';
import Counter from './components/Counter';
import CounterIncrease from "./components/CounterIncrease";
import CounterDecrease from './components/CounterDecrease';
import CounterReset from "./components/CounterReset";


function App() {
  return (
    <div className="App">
      <Counter/>
      <CounterIncrease/>
      <CounterDecrease/>
      <br></br>
      <hr style={{width:"120px", backgroundColor:"red", height:"3px", border:"1px solid red"}}></hr>
      <CounterReset/>
    </div>
  );
}

export default App;
