import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./features/Layout";
import Home from "./Pages/Home";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
