import React from "react";
import PropTypes from "prop-types";
import image from "../images/house-location-pin.svg";
import Filter from "./Filter";
import { StyledFilterToggleButton, StyledHeader } from "../styles";

const Header = ({ filterIsVisible, setState }) => {
  const toggleFilter = e => {
    e.preventDefault();
    setState(prev => ({
      ...prev,
      filterIsVisible: !prev.filterIsVisible,
    }));
  };

  return (
    <StyledHeader>
      <Filter {...{ setState, toggleFilter, filterIsVisible }} />
      <img alt="pin icon" src={image} />
      <h1>Property Listings</h1>
      <StyledFilterToggleButton
        {...{ filterIsVisible }}
        onClick={toggleFilter}
        type="button"
      >
        Filter
      </StyledFilterToggleButton>
    </StyledHeader>
  );
};

Header.propTypes = {
  setState: PropTypes.func.isRequired,
  filterIsVisible: PropTypes.bool.isRequired,
};

export default Header;
