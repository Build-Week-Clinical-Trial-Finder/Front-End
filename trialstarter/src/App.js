import React from 'react';
import './App.css';
import StudyList from "./Components/StudyList.js";
import Header from "./Components/Header.js";

function App() {
  return (
    <div className="App">
      <Header />
      <StudyList />
    </div>
  );
}

export default App;
