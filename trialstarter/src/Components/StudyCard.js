import React from "react";

const StudyCard = (props) => {

    function randomNum(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    return (
        <div className="study-card" key={props.id}>
          <img className="study-card-image" src={`study-images/${randomNum(1, 18)}.png`} alt="Study" />
          <h2 className="study-card-title">{props.title}</h2>
          <p className="study-card-description">{props.description}</p>
          <p className="study-card-status">{props.status}</p>
          <p className="study-card-location">
            {props.city}, {props.state}
          </p>
        </div>
    );
}

export default StudyCard;