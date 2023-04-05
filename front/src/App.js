import './App.css';
import {Route, Routes} from "react-router-dom"
import Home from "./views/Home.jsx"
import Landing from "./views/Landing.jsx"

function App() {
  return (
    <div className="App">

    <Routes>
      <Route   exact path="/" element={<Landing />}  />
      <Route   exact path="home" element={<Home />}  />
    </Routes>

    </div>
  );
}

export default App;
