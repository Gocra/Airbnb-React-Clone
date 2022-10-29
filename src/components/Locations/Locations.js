import React from "react";
import { rooms } from "./data";
import "./Locations.css";
import StarIcon from "../../assets/star.svg";

const Rooms = () => {
  return (
    <main className="rooms-container">
      {rooms.map((room) => {
        return <Room key={room.id} {...room} />;
      })}
    </main>
  );
};

const Room = ({ pictures, location, host, date, price, stars }) => {
  return (
    <a href="#" className="room">
      <div className="images-container">
        {/* {pictures.map((picture) => {
          return <img key={picture} src={picture} />;
        })} */}
        <img src={pictures[0]} />
      </div>
      <div className="content">
        <div className="left">
          <span className="location">{location}</span>
          <span className="host">{host}</span>
          <span className="date">{date}</span>
          <span className="price-container">
            <span className="price">{price} </span>
            <span className="total">total</span>
          </span>
        </div>
        <div className="right">
          <span className="stars">
            <img className="star" src={StarIcon}></img>
            {stars}
          </span>
        </div>
      </div>
    </a>
  );
};

export default Rooms;
