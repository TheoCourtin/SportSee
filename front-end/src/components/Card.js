import React from "react";
import PropTypes from "prop-types";

/**
 * Returns a React component displays Card on Home and Dashboard
 * @param {string} for the params of info, unit and text
 * @returns a React Components
 */

const Card = ({ icon, info, unit, text, iconClass }) => {
  return (
    <div className="card">
      <div className={`card-icon ${iconClass}`}>
        <img src={icon} alt="Icon" />
      </div>
      <div className="content">
        <p className="info">
          {info}
          {unit}
        </p>
        <p className="text">{text}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  icon: PropTypes.string,
  info: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  unit: PropTypes.string,
  text: PropTypes.string,
  iconClass: PropTypes.string,
};

export default Card;
