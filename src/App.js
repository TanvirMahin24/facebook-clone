import React from "react";
import "./App.css";
import Feed from "./Feed/Feed";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      {/* HEADER */}
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
        {/* WIDGET */}
      </div>
    </div>
  );
}

export default App;
