/* global google */
import React, { useRef } from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import { StyledMapContainer, StyledMap } from "../styles";
import markerImage from "../images/img_map-marker.png";
// const {
//   MarkerWithLabel,
// } = require("react-google-maps/lib/components/addons/MarkerWithLabel");

const GoogleMapWrap = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyA-ru_uWY37xLv0qJ7ceWstneow70_nqXA&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <StyledMapContainer />,
    mapElement: <StyledMap />,
  }),
  withScriptjs,
  withGoogleMap
)(({ activeProperty, setActiveProperty, propertiesList }) => {
  const { latitude, longitude } = activeProperty;
  const mapRef = useRef(null);

  const hideAll = () =>
    mapRef.current.props.children.forEach(marker => {
      console.log({ marker });
    });

  return (
    <GoogleMap
      ref={mapRef}
      center={{ lat: latitude, lng: longitude }}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
      defaultZoom={8}
      zoom={15}
    >
      {propertiesList.map(property => {
        const { latitude: lat, longitude: lng, address, id, index } = property;
        const isActive = activeProperty.id === id;
        return (
          <Marker
            key={id}
            clickable
            icon={{
              url: markerImage,
              size: new google.maps.Size(22, 55),
              origin: new google.maps.Point(0, -15),
              anchor: new google.maps.Point(11, 52),
            }}
            id={index}
            labelAnchor={new google.maps.Point(0, 0)}
            labelStyle={{
              color: "#ffffff",
            }}
            onClick={() => {
              hideAll();
              setActiveProperty(property, true);
            }}
            position={{ lat, lng }}
          >
            {isActive && (
              <InfoWindow>
                <h1>{address}</h1>
              </InfoWindow>
            )}
          </Marker>
          // <MarkerWithLabel
          //   key={address}
          //   clickable
          //   icon={{
          //     url:
          //       markerImage,
          //     size: new google.maps.Size(22, 55),
          //     origin: new google.maps.Point(0, -15),
          //     anchor: new google.maps.Point(11, 52),
          //   }}
          //   labelAnchor={new google.maps.Point(0, 0)}
          //   labelStyle={{
          //     color: "#ffffff",
          //   }}
          //   onClick={() => {
          //     hideAll();
          //     setActiveProperty(property, true);
          //   }}
          //   position={{ lat, lng }}
          // >
          //   <span>{index + 1}</span>
          // </MarkerWithLabel>
        );
      })}
    </GoogleMap>
  );
});

export default GoogleMapWrap;
