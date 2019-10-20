import React, { useState, useEffect } from 'react';
import axiosWithAuth from "./Components/axiosAuth.js";
import './App.css';
import StudyList from "./Components/StudyList.js";
import Header from "./Components/Header.js";

function App(props) {

  const [studies, setStudies] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("https://trial-finder-bw.herokuapp.com/api/watchlist/")
      .then(result => {
        console.log(result);
        setStudies(result.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  console.log(studies);

  return (
    <div className="container">
      <Header studies={studies}/>
      <StudyList studies={studies} />
    </div>
  );
}

export default App;
