import { ReactComponent as FiltersIcon } from "../../assets/filters.svg";
import ChevronRightIcon from "../../assets/chevron-right.svg";
import ChevronLeftIcon from "../../assets/chevron-left.svg";
import { TYPES_OF_HOLIDAY } from "./data";
import "./HolidayTypes.css";
import { useRef, useState, useEffect } from "react";

const HolidayTypes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = TYPES_OF_HOLIDAY.length;

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  return (
    <div className="holiday-types">
      <div className="container">
        {currentIndex > 0 && (
          <div className="left-arrow">
            <button onClick={() => prev()}>
              <img src={ChevronLeftIcon} />
            </button>
          </div>
        )}
        <div
          className="types"
          style={{ transform: `translateX(-${currentIndex * 25}%)` }}
        >
          {TYPES_OF_HOLIDAY.map((type) => {
            return <Type key={type.id} {...type} />;
          })}
        </div>
        <div className="right">
          <div className="right-arrow">
            <button onClick={() => next()}>
              <img src={ChevronRightIcon} />
            </button>
          </div>
          <button className="filters">
            <FiltersIcon />
            <span>Filters</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const Type = ({ icon, type }) => {
  return (
    <button className="holiday-type">
      <img className="icon" src={icon} />
      <span className="name">{type}</span>
    </button>
  );
};

export default HolidayTypes;
