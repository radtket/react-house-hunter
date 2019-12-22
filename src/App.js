import React, { useState } from "react";
import jump from "jump.js";
import PropTypes from "prop-types";
import Sidebar from "./components/Sidebar";
import GoogleMapWrap from "./components/GoogleMapWrap";
import { easeInOutCubic } from "./utils/helpers";
import { GlobalStyles } from "./styles";
import { ShapeProperty } from "./utils/types";

const App = ({ data }) => {
  const [state, setState] = useState({
    properties: data,
    activeProperty: data[0],
    filterIsVisible: false,
    filterBedrooms: "any",
    filterBathrooms: "any",
    filterCars: "any",
    filterSort: "any",
    priceFrom: 500000,
    priceTo: 1000000,
    filteredProperties: [],
    isFiltering: false,
  });

  const setActiveProperty = (activeProperty, scroll = true) => {
    setState(prev => ({
      ...prev,
      activeProperty,
    }));

    const target = `#card-${activeProperty.index}`;

    if (scroll) {
      jump(target, {
        duration: 800,
        easing: easeInOutCubic,
      });
    }
  };

  const {
    properties,
    activeProperty,
    filterIsVisible,
    filteredProperties,
    isFiltering,
  } = state;

  const propertiesList = isFiltering ? filteredProperties : properties;

  return (
    <div>
      <GlobalStyles />
      <Sidebar
        {...{
          activeProperty,
          filterIsVisible,
          isFiltering,
          setState,
          setActiveProperty,
          propertiesList,
        }}
      />
      <GoogleMapWrap
        {...{ activeProperty, setActiveProperty, propertiesList }}
      />
    </div>
  );
};

App.propTypes = {
  data: PropTypes.arrayOf(ShapeProperty),
};

App.defaultProps = {
  data: [],
};

export default App;
