import React from "react";
import { ReactDOM } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import Login from "./pages/Login/Login";
import "./App.scss";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/watch" element={<Watch />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default App;
