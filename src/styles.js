import styled, { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";
import BedIcon from "./images/bed-left-side.svg";
import BathTubIcon from "./images/bathtub.svg";
import CarIcon from "./images/car-compact.svg";

export const GlobalStyles = createGlobalStyle`
  ${styledNormalize}

    html,
    body {
      margin: 0;
      padding: 0;
      position: relative;
      background-color: #f3f3f3;
    }

    h1 {
      font-size: 20px;
      margin-bottom: 15px;
    }
  `;

export const StyledFilterBox = styled.div`
  display: inline-block;
  margin: 0 ${({ filterFrom }) => (filterFrom ? "10px" : "20px")} 20px 0;

  label {
    display: block;
  }
`;

export const StyledCard = styled.button`
  background-color: #fff;
  border: 3px #fff solid;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  padding: 10px;
  position: relative;
  transition: all 0.3s linear;

  &:hover {
    background-color: #f3f3f3;
    border-color: #f3f3f3;
  }

  img {
    display: block;
    margin: 0 auto;
    max-width: calc(100%);
  }

  .index {
    background-color: rgba(0, 0, 0, 0.2);
    color: #fff;
    display: block;
    font-size: 14px;
    line-height: 20px;
    padding: 0 10px;
    position: absolute;
    right: 0;
    top: 0;
  }

  .price {
    font-weight: bold;
    margin: 0;
    padding: 10px 0;
  }

  .details {
    position: relative;
  }

  .location {
  }

  .features {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      display: inline-block;
      margin-right: 10px;
      padding-left: 24px;

      span {
        display: none;
      }

      &.icon-bed {
        background: url(${BedIcon}) left center;
        background-repeat: no-repeat;
        background-size: auto 100%;
      }

      &.icon-bath {
        background: url(${BathTubIcon});
        background-repeat: no-repeat;
        background-size: auto 100%;
      }

      &.icon-car {
        background: url(${CarIcon});
        background-repeat: no-repeat;
        background-size: auto 100%;
      }
    }
  }

  &.is-active {
    border-color: $blue;

    .index {
      background-color: $blue;
    }
  }
`;

export const StyledSidebar = styled.aside`
  margin-left: 50%;
  position: relative;
  width: 50%;
  z-index: 3;
`;

export const StyledMapContainer = styled.div`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 50%;
  top: 0;
  z-index: 2;
`;

export const StyledMap = styled.div`
  height: 100%;
  width: 100%;
`;

export const StyledCardsList = styled.div`
  background-color: ${({ isEmpty }) => (isEmpty ? "#f3f3f3" : "#fff")};
  padding: 10px;
`;

export const StyledWarning = styled.div`
  font-size: 30px;
  margin-top: 30%;
  text-align: center;

  img {
    margin: 0 auto 30px;
    max-width: 100px;
  }
`;

export const StyledFilterToggleButton = styled.button`
  background: ${({ filterIsVisible }) =>
    filterIsVisible ? "#1078ff" : "transparent"};
  border: 1px #fff solid;
  border-radius: 5px;
  color: #fff;
  display: block;
  font-size: 16px;
  padding: 3px 15px;
  transition: all 0.3s linear;
  width: 100%;

  &:hover,
  &:active {
    background-color: ${({ filterIsVisible }) =>
      filterIsVisible ? "#1078ff" : "#fff"};
    color: ${({ filterIsVisible }) => (filterIsVisible ? "#1078ff" : "#222")};
  }

  span {
    display: none;
  }

  @media (min-width: 992px) {
    strong {
      display: none;
    }

    span {
      display: inline-block;
    }
  }
`;

export const StyledHeader = styled.header`
  background-color: #222;
  padding: 30px;
  position: relative;
  text-align: center;
  z-index: 2;

  img {
    max-width: 40px;
  }

  h1 {
    bottom: -7px;
    color: #fff;
    display: inline-block;
    font-size: 16px;
    margin: 0 0 20px 5px;
    position: relative;
    text-transform: uppercase;
  }

  .btn-clear {
    background: transparent;
    border: 0;
    color: #1078ff;
    text-decoration: underline;

    &:hover,
    &:active {
      text-decoration: none;
    }
  }

  @media (min-width: 992px) {
    h1 {
      bottom: -10px;
      font-size: 20px;
      margin: 0 0 50px 30px;

      br {
        display: none;
      }
    }

    img {
      display: inline-block;
      max-width: 70px;
    }
  }

  @media (min-width: 1400px) {
    h1 {
      font-size: 40px;
      margin: 0 0 0 30px;
    }

    .btn-filter {
      position: absolute;
      right: 20px;
      top: 50px;
      width: 80px;
    }
  }
`;

export const StyledFilterForm = styled.form`
  background-color: #fff;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.2);
  height: auto;
  left: auto;
  padding: 32px 130px 30px 30px;
  position: fixed;
  right: 0;
  text-align: left;
  top: 0;
  transform: ${({ filterIsVisible }) => {
    return filterIsVisible ? "translateY(0%)" : "translateY(-100%)";
  }};

  transition: transform 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  width: 50%;
  z-index: 3;

  ${StyledFilterToggleButton} {
    position: absolute;
    right: 20px;
    top: 20px;
    width: auto;

    @media (min-width: 992px) {
      top: 50px;
      width: 80px;
    }
  }
`;
