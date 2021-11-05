import "./App.css";
import DigitalClock from "./components/DigitalClock";
import Countdown from "./components/Countdown";
import Stopwatch from "./components/Stopwatch";

function App() {
  return (
    <div className="App">
      <DigitalClock />
      <Countdown />
      <Stopwatch />
    </div>
  );
}

export default App;
