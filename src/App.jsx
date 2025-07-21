import { useState } from "react";
import "./App.css";
import { Router } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/devices" element={<Devices />} />
        <Route path="/routines" element={<Routines />} />
      </Routes>
    </Router>
  );
}

export default App;
