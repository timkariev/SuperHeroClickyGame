import React from "react";
import "./ItemCard.css";

const FriendCard = props => (
  <div className="card" onClick={() => props.checkClick(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    {/* <div className="content">
      <ul>
        <li>
          <strong>Name444:</strong> {props.name}
        </li>
        <li>
          <strong>Occupation:</strong> {props.occupation}
        </li>
        <li>
          <strong>Hi:</strong> {props.location}
        </li>
      </ul>
    </div> */}
    {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
      𝘅
    </span> */}
  </div>
);

export default FriendCard;
