import './App.css';
import useCustomHook from './CustomHook';
import Home from './Home'
function App() {

  //const data = useCustomHook();
  // const {count,handleCountState} = useCustomHook();
  const [count,handleCountState] = useCustomHook();

  return (
    <div>
    <Home/>
      <h1>Welcome to AndroTech4uJava</h1>
      <h1>Counter : {count}</h1>
      <button onClick={handleCountState}>Increment</button>
    </div>
  );
}
//.\bin\windows\kafka-server-start.bat .\config\server.properties

export default App;
