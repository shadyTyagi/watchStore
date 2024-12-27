import WatchStudio from "./component/WatchStudio/WatchStudio";
import Home from "./component/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <WatchStudio /> */}
      {/* <Home /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/WatchStudio" element={<WatchStudio />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
