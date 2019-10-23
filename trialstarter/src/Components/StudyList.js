import React, { useEffect, useState } from "react";
import StudyCard from "./StudyCard.js";

export default function StudyList(props) {

    // const [studies, setStudies] = useState([]);

    // useEffect(() => {
    // axiosWithAuth()
    //   .get("https://trial-finder-bw.herokuapp.com/api/watchlist/")
    //   .then(result => {
    //     console.log(result);
    //     setStudies(result.data);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    // }, []);

    return (
      <div className="study-list">
        {!!props.searchResults &&
          props.searchResults.map(study => {
            console.log(study);
            return (
              <StudyCard
                title={study.brief_title}
                description={study.brief_summary}
                status={study.overall_status}
                state={study.state}
                city={study.city}
                key={study.users_id}
              />
            );
          })}
      </div>
    );
}