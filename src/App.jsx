import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Demo from "./components/EventApplication/Demo";
import AppRes from "./components/ResApp/AppRes";
import EventApp from './components/EventApplication/EventApplication'
import DemoRes from "./components/ResApp/DemoRes";

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Demo" element={<Demo />} />
          <Route path="/EventApp" element={<EventApp />} />
          <Route path="/AppRes" element={<AppRes />} />
          <Route path="/DemoRes" element={<DemoRes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
