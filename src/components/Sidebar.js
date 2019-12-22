import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import CardsContainer from "./CardsContainer";
import { isArrayEmpty } from "../utils/helpers";
import { ShapeProperty } from "../utils/types";
import { StyledSidebar } from "../styles";

const Sidebar = ({
  activeProperty,
  filterIsVisible,
  isFiltering,
  setState,
  setActiveProperty,
  propertiesList,
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
        {...{
          setActiveProperty,
          hasProperties: !isArrayEmpty(propertiesList),
          activeProperty,
          isFiltering,
          propertiesList,
        }}
      />
    </StyledSidebar>
  );
};

Sidebar.propTypes = {
  activeProperty: ShapeProperty.isRequired,
  filterIsVisible: PropTypes.bool.isRequired,
  isFiltering: PropTypes.bool.isRequired,
  setActiveProperty: PropTypes.func.isRequired,
  setState: PropTypes.func.isRequired,
  propertiesList: PropTypes.arrayOf(ShapeProperty),
};

Sidebar.defaultProps = {
  propertiesList: [],
};

export default Sidebar;
