import React from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';

export default (props) => {
  console.log(props);

  return (
    <GoogleMapLoader
      containerElement = { <div style={{height:'350px'}} />}
      googleMapElement = {
        <GoogleMap defaultZoom={12} defaultCenter={{lat:props.lat, lng:props.lon}} >
        {props.markers.map((marker, index) => {
            console.log(marker);
              return (
                <Marker
                  {...marker}
                  onRightclick={() => props.onMarkerRightclick(index)} />
              );
            })}
        </GoogleMap>
      }
    />
  );
}
