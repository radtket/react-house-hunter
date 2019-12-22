import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import CardsContainer from "./CardsContainer";
import { isArrayEmpty } from "../utils/helpers";
import { ShapeProperty } from "../utils/types";
import { StyledSidebar } from "../styles";

const Sidebar = ({
  setActiveProperty,
  setState,
  properties,
  activeProperty,
  filterIsVisible,
  filteredProperties,
  isFiltering,
  filterSort,
}) => {
  return (
    <StyledSidebar>
      <Header
        {...{
          filterIsVisible,
          setState,
        }}
      />
      <CardsContainer
        hasProperties={!isArrayEmpty(properties)}
        propertiesList={isFiltering ? filteredProperties : properties}
        {...{
          setActiveProperty,
          properties,
          activeProperty,
          filterIsVisible,
          filteredProperties,
          isFiltering,
          filterSort,
        }}
      />
    </StyledSidebar>
  );
};

Sidebar.propTypes = {
  activeProperty: ShapeProperty.isRequired,
  filteredProperties: PropTypes.arrayOf(ShapeProperty),
  filterIsVisible: PropTypes.bool.isRequired,
  filterSort: PropTypes.string.isRequired,
  isFiltering: PropTypes.bool.isRequired,
  properties: PropTypes.arrayOf(ShapeProperty),
  setActiveProperty: PropTypes.func.isRequired,
  setState: PropTypes.func.isRequired,
};

Sidebar.defaultProps = {
  properties: [],
  filteredProperties: [],
};

export default Sidebar;
