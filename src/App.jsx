import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./features/Layout";
import Home from "./Pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route exact path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
