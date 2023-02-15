import React from 'react'
import GoogleMapReact from 'google-map-react';
import {Paper, Typography, useMediaQuery} from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';
import useStyles from './styles';

const Map = ({setCoordinates, setBounds, coordinates, places}) => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)');
  
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{key: 'AIzaSyDzfLe_rgZPBtVAPdml7IsGxzymNVtJQYo'}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e)=> {
          setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
          setCoordinates({lat: e.center.lat, lng: e.center.lng});
        }}
        onChildClick={() => {}}
      >
        {places?.map((place, i)=> (
          <div className={classes.markerContainer} lat={Number(place.lattitude)} Ing={Number(place.longitude)} key={i}>
            {
              isMobile ? (
                <LocationOnOutlinedIcon color="primary" fontSize="large"/>
              ) : (
                <Paper>
                  
                </Paper>
              )
            }
          </div>
        ))}
      </GoogleMapReact>
    </div>
  )
}

export default Map