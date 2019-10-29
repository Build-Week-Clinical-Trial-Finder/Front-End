import React, { useState, useEffect } from 'react';
import axiosWithAuth from "./Components/axiosAuth.js";
import './App.css';
import StudyList from "./Components/StudyList.js";
import Header from "./Components/Header.js";
import Login from './Components/Login.js';

function App(props) {

  const [studies, setStudies] = useState([]);

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("https://trial-finder-bw.herokuapp.com/api/watchlist/")
      .then(result => {
        console.log(result);
        console.log("axios call fired");
        setStudies(result.data);
        setSearchResults(result.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  console.log(studies);


  return (
    <div className="container">
      <Header
        searchResults={searchResults}
        setSearchResults={setSearchResults}
        studies={studies}
      />
      <StudyList searchResults={searchResults} />
    </div>
  );
}

export default App;
