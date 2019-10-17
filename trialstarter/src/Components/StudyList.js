import React, { useEffect, useState } from "react";
import axiosWithAuth from "./axiosAuth.js";

export default function StudyList() {

    const [studies, setStudies] = useState([]);

    useEffect(() => {
    axiosWithAuth()
      .get("https://trial-finder-bw.herokuapp.com/api/watchlist/")
      .then(result => {
        console.log(result);
        setStudies(result.data.results);
      })
      .catch(err => {
        console.log(err);
      });
    }, []);

    return (
        <div>
            {studies.map(study => {
                console.log(study);
            })}
        </div>
    )
}