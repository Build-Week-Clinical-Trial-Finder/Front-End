import React from "react";

const StudyCard = (props) => {

    return (
      <div>
        <div className="study-card" key={props.id}>
          <img className="study-card-image" src={props.imageSource} />
          <h2 className="study-card-title">{props.title}</h2>
          <p className="study-card-description">{props.description}</p>
          <p className="study-card-status">{props.status}</p>
          <p className="study-card-location">
            {props.city}, {props.state}
          </p>
        </div>
      </div>
    );
}

export default StudyCard;