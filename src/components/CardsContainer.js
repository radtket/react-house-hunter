/* eslint-disable no-underscore-dangle */
import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import image from "../images/location-map.svg";
import { ShapeProperty } from "../utils/types";
import { StyledCardsList, StyledWarning } from "../styles";

const CardsContainer = ({
  setActiveProperty,
  hasProperties,
  activeProperty,
  isFiltering,
  propertiesList,
}) => {
  return (
    <div
      className="cards container"
      style={{
        maxWidth: "100%",
      }}
    >
      <StyledCardsList className="row" isEmpty={!hasProperties}>
        {propertiesList.map(property => (
          <Card
            {...property}
            key={property.id}
            isActive={property.id === activeProperty.id}
            onClick={() => {
              setActiveProperty(property, false);
            }}
          />
        ))}
        {isFiltering && !hasProperties && (
          <StyledWarning>
            <img alt="" src={image} />
            <br />
            <p>No properties were found.</p>
          </StyledWarning>
        )}
      </StyledCardsList>
    </div>
  );
};

CardsContainer.propTypes = {
  setActiveProperty: PropTypes.func.isRequired,
  hasProperties: PropTypes.bool.isRequired,
  activeProperty: ShapeProperty.isRequired,
  isFiltering: PropTypes.bool.isRequired,
  propertiesList: PropTypes.arrayOf(ShapeProperty),
};

CardsContainer.defaultProps = {
  propertiesList: [],
};

export default CardsContainer;
