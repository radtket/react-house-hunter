import PropTypes from "prop-types";

export const TypeProperty = {
  id: PropTypes.string,
  index: PropTypes.number,
  price: PropTypes.number,
  picture: PropTypes.string,
  city: PropTypes.string,
  address: PropTypes.string,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  bedrooms: PropTypes.number,
  bathrooms: PropTypes.number,
  carSpaces: PropTypes.number,
};

export const ShapeProperty = PropTypes.shape({
  id: PropTypes.string,
  index: PropTypes.number,
  price: PropTypes.number,
  picture: PropTypes.string,
  city: PropTypes.string,
  address: PropTypes.string,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  bedrooms: PropTypes.number,
  bathrooms: PropTypes.number,
  carSpaces: PropTypes.number,
});
