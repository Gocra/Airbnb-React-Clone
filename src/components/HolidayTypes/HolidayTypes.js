import { ReactComponent as FiltersIcon } from "../../assets/filters.svg";
import ChevronRightIcon from "../../assets/chevron-right.svg";
import ChevronLeftIcon from "../../assets/chevron-left.svg";
import { TYPES_OF_HOLIDAY } from "./data";
import "./HolidayTypes.css";

const HolidayTypes = () => {
  return (
    <div className="holiday-types">
      <div className="container">
        <div className="left-arrow">
          <button>
            <img src={ChevronLeftIcon} />
          </button>
        </div>
        <div className="types">
          {TYPES_OF_HOLIDAY.map((type) => {
            return <Type key={type.type} {...type} />;
          })}
        </div>
        <div className="right">
          <div className="right-arrow">
            <button>
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
