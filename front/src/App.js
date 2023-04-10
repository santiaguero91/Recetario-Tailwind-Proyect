import './App.css';
import {Route, Routes} from "react-router-dom"
import Home from "./views/Home.jsx"
import Landing from "./views/Landing.jsx"
import Old from "./views/Old.jsx"
import Details from "./views/Details"

function App() {
  return (
    <div className="App">

    <Routes>
      <Route   exact path="/" element={<Landing />}  />
      <Route   exact path="home" element={<Home />}  />
      <Route   exact path="old" element={<Old />}  />
      <Route exact path="detail/:id" element={<Details/>}  />

    </Routes>

    </div>
  );
}

export default App;
