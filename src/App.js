import React, { Profiler, createContext, useState } from "react";
import "./style.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Navbar from "./Navbar";
export const AppContext = createContext()

export default function App() {
  const [username, setUsername] = useState("Carlos")

  return (
    <Profiler id="App" >
      <AppContext.Provider value={{ username, setUsername }}>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/profile" Component={Profile} />
          <Route path="/contact" Component={Contact} />
          <Route path="*" Component={Home} />
        </Routes>
      </AppContext.Provider>
    </Profiler>
  );
}
