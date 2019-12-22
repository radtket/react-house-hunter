/* eslint-disable react/prop-types */
import React, { useRef } from "react";
import PropTypes from "prop-types";
import { isArrayEmpty, priceFormat } from "../utils/helpers";
import {
  StyledFilterToggleButton,
  StyledFilterBox,
  StyledFilterForm,
} from "../styles";

const Filter = ({ setState, toggleFilter, filterIsVisible }) => {
  const ref = useRef();
  const handleFilterChange = ({ target }) => {
    const { value, name } = target;
    setState(prev => {
      const copy = { ...prev };
      copy[name] = value;

      const {
        filterBedrooms,
        filterBathrooms,
        filterCars,
        priceFrom,
        priceTo,
      } = copy;

      copy.filteredProperties = copy.properties
        .filter(property => {
          const { bedrooms, bathrooms, carSpaces, price } = property;
          const match =
            (bedrooms === parseInt(filterBedrooms, 10) ||
              filterBedrooms === "any") &&
            (bathrooms === parseInt(filterBathrooms, 10) ||
              filterBathrooms === "any") &&
            (carSpaces === parseInt(filterCars, 10) || filterCars === "any") &&
            price >= priceFrom &&
            price <= priceTo;

          if (match) {
            return property;
          }

          return false;
        })
        .sort((a, b) => {
          if (copy.filterSort === "0") {
            return a.price - b.price;
          }

          if (copy.filterSort === "1") {
            return b.price - a.price;
          }

          return false;
        });

      copy.activeProperty = isArrayEmpty(copy.filteredProperties)
        ? copy.properties[0]
        : copy.filteredProperties[0];

      copy.isFiltering =
        copy.filterBedrooms !== "any" ||
        copy.filterBathrooms !== "any" ||
        copy.filterCars !== "any" ||
        copy.priceFrom !== "0" ||
        copy.priceTo !== "1000001" ||
        copy.filterSort !== "any";
      return copy;
    });
  };

  return (
    <StyledFilterForm ref={ref} {...{ filterIsVisible }}>
      <StyledFilterBox>
        <label htmlFor="filterBedrooms">
          Bedrooms
          <select
            id="filterBedrooms"
            name="filterBedrooms"
            onChange={handleFilterChange}
          >
            <option value="any">Any</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </label>
      </StyledFilterBox>
      <StyledFilterBox>
        <label htmlFor="filterBathrooms">
          Bathrooms
          <select
            id="filterBathrooms"
            name="filterBathrooms"
            onChange={handleFilterChange}
          >
            <option value="any">Any</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </label>
      </StyledFilterBox>
      <StyledFilterBox>
        <label htmlFor="filterCars">
          Car Spaces
          <select
            id="filterCars"
            name="filterCars"
            onChange={handleFilterChange}
          >
            <option value="any">Any</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </label>
      </StyledFilterBox>
      <StyledFilterBox filterFrom>
        <label htmlFor="priceFrom">
          Min Price
          <select id="priceFrom" name="priceFrom" onChange={handleFilterChange}>
            <option value="0">Any</option>
            <option value="500000">{priceFormat(500000)}</option>
            <option value="600000">{priceFormat(600000)}</option>
            <option value="700000">{priceFormat(700000)}</option>
            <option value="800000">{priceFormat(800000)}</option>
            <option value="900000">{priceFormat(900000)}</option>
          </select>
        </label>
      </StyledFilterBox>
      <StyledFilterBox>
        <label htmlFor="priceTo">
          Max Price
          <select id="priceTo" name="priceTo" onChange={handleFilterChange}>
            <option value="1000001">Any</option>
            <option value="600000">{priceFormat(600000)}</option>
            <option value="700000">{priceFormat(700000)}</option>
            <option value="800000">{priceFormat(800000)}</option>
            <option value="900000">{priceFormat(900000)}</option>
            <option value="1000000">{priceFormat(1000000)}</option>
          </select>
        </label>
      </StyledFilterBox>
      <StyledFilterBox>
        <label htmlFor="filterSort">
          Order by
          <select
            id="filterSort"
            name="filterSort"
            onChange={handleFilterChange}
          >
            <option value="any">Default</option>
            <option value="0">Price: - Low to High</option>
            <option value="1">Price: - High to Low</option>
          </select>
        </label>
      </StyledFilterBox>
      <StyledFilterBox>
        <button
          className="btn-clear"
          onClick={async e => {
            e.preventDefault();

            await setState(prev => {
              const copy = { ...prev };
              copy.properties = copy.properties.sort(
                (a, b) => a.index - b.index
              );
              const [activeProperty] = copy.properties;
              copy.activeProperty = activeProperty;
              copy.filteredProperties = [];
              copy.isFiltering = false;

              return {
                ...copy,
              };
            });
            await ref.current.reset();
          }}
          type="button"
        >
          Clear
        </button>
      </StyledFilterBox>
      <StyledFilterToggleButton
        {...{ filterIsVisible }}
        onClick={toggleFilter}
        type="button"
      >
        <strong>X</strong>
        <span>Close</span>
      </StyledFilterToggleButton>
    </StyledFilterForm>
  );
};

Filter.propTypes = {
  setState: PropTypes.func.isRequired,
  toggleFilter: PropTypes.func.isRequired,
};

export default Filter;
