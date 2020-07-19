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
        properties,
        filterBedrooms,
        filterBathrooms,
        filterCars,
        priceFrom,
        priceTo,
      } = copy;

      const filteredProperties = properties
        .filter(({ bedrooms, bathrooms, carSpaces, price }) => {
          return (
            (bedrooms === parseInt(filterBedrooms, 10) ||
              filterBedrooms === "any") &&
            (bathrooms === parseInt(filterBathrooms, 10) ||
              filterBathrooms === "any") &&
            (carSpaces === parseInt(filterCars, 10) || filterCars === "any") &&
            price >= priceFrom &&
            price <= priceTo
          );
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

      const [activeProperty] = isArrayEmpty(filteredProperties)
        ? properties
        : filteredProperties;

      return {
        ...copy,
        isFiltering:
          copy.filterBedrooms !== "any" ||
          copy.filterBathrooms !== "any" ||
          copy.filterCars !== "any" ||
          copy.priceFrom !== "0" ||
          copy.priceTo !== "1000001" ||
          copy.filterSort !== "any",
        activeProperty,
        filteredProperties,
      };
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
            {["any", 1, 2, 3].map((value, idx) => {
              return (
                <option key={`filterBedrooms-${value}`} value={value}>
                  {idx === 0 ? "Any" : value}
                </option>
              );
            })}
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
            {["any", 1, 2].map((value, idx) => {
              return (
                <option key={`filterBathrooms-${value}`} value={value}>
                  {idx === 0 ? "Any" : value}
                </option>
              );
            })}
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
            {["any", 0, 1, 2].map((value, idx) => {
              return (
                <option key={`filterCars-${value}`} value={value}>
                  {idx === 0 ? "Any" : value}
                </option>
              );
            })}
          </select>
        </label>
      </StyledFilterBox>
      <StyledFilterBox filterFrom>
        <label htmlFor="priceFrom">
          Min Price
          <select id="priceFrom" name="priceFrom" onChange={handleFilterChange}>
            {[0, 500000, 600000, 700000, 800000, 900000].map((value, idx) => {
              return (
                <option key={`priceFrom-${value}`} value={value}>
                  {idx === 0 ? "Any" : priceFormat(value)}
                </option>
              );
            })}
          </select>
        </label>
      </StyledFilterBox>
      <StyledFilterBox>
        <label htmlFor="priceTo">
          Max Price
          <select id="priceTo" name="priceTo" onChange={handleFilterChange}>
            {[1000001, 600000, 700000, 800000, 900000, 1000000].map(
              (value, idx) => {
                return (
                  <option key={`priceTo-${value}`} value={value}>
                    {idx === 0 ? "Any" : priceFormat(value)}
                  </option>
                );
              }
            )}
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
