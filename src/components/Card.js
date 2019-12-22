import React from "react";
import PropTypes from "prop-types";
import { priceFormat } from "../utils/helpers";
import { TypeProperty } from "../utils/types";
import { StyledCard } from "../styles";

const Card = ({
  onClick,
  isActive,
  price,
  address,
  city,
  picture,
  bedrooms,
  bathrooms,
  carSpaces,
  index,
}) => {
  return (
    <StyledCard
      className={`card col-sm-12 col-md-6 col-lg-4 ${
        isActive ? "is-active" : ""
      }`}
      id={`card-${index}`}
      onClick={onClick}
      type="button"
    >
      <img alt={`${city}`} src={picture} />
      <p className="price">{priceFormat(price)}</p>
      <div className="details">
        <span className="index">{index + 1}</span>
        <p className="location">
          {city}
          <br />
          {address}
        </p>
        <ul className="features">
          <li className="icon-bed">
            {bedrooms}
            <span>bedrooms</span>
          </li>
          <li className="icon-bath">
            {bathrooms}
            <span>bathrooms</span>
          </li>
          <li className="icon-car">
            {carSpaces}
            <span>parking spots</span>
          </li>
        </ul>
      </div>
    </StyledCard>
  );
};

Card.propTypes = {
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  ...TypeProperty,
};

export default Card;
