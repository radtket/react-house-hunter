import React, { useState } from "react";
import jump from "jump.js";
import Sidebar from "./components/Sidebar";
import GoogleMapWrap from "./components/GoogleMapWrap";
import properties from "./data/properties";
import { easeInOutCubic } from "./utils/helpers";
import { GlobalStyles } from "./styles";

const App = () => {
  const [state, setState] = useState({
    properties,
    activeProperty: properties[0],
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

  return (
    <div>
      <GlobalStyles />
      <Sidebar {...{ ...state, setState, setActiveProperty }} />
      <GoogleMapWrap
        propertiesList={
          state.isFiltering ? state.filteredProperties : state.properties
        }
        {...{ ...state, setState, setActiveProperty }}
      />
    </div>
  );
};

export default App;
