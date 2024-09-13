import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainDark from "./pages/MainDark";
import MainDark002 from "./pages/MainDark002";
import MainDark2 from "./pages/MainDark2/MainDark2";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainDark />} />
        <Route path="/page2" element={<MainDark002 />} />
        <Route path="/page3" element={<MainDark2 />} />
      </Routes>
    </Router>
  );
};

export default App;
