import React, {useEffect, useState} from 'react';
import {STYLES} from '../utils/styles';
import {COLORS} from '../utils/colors';
import {PermissionsAndroid, Text, View} from 'react-native';
import Geolocation, {GeoPosition} from 'react-native-geolocation-service';
import {requestLocationPermission} from '../utils/requestLocationPermission';

const Location = () => {
  const [locationPermission, setLocationPermission] = useState(false);
  const [currentLocation, setCurrentLocation] = useState<GeoPosition | null>(
    null,
  );
  useEffect(() => {
    const setLocation = async () => {
      const granted = await requestLocationPermission();

      try {
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          setLocationPermission(true);
        }
      } catch (e) {
        console.warn(e);
      }
    };

    setLocation();
  }, []);

  if (locationPermission) {
    Geolocation.getCurrentPosition(
      position => {
        setCurrentLocation(position);
      },
      error => {
        console.error(error);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }
  return (
    <View
      style={[
        STYLES.colContainer,
        {
          backgroundColor: COLORS.primary.default,
          padding: 8,
          borderWidth: 2,
          borderColor: 'black',
          borderRadius: 20,
          marginVertical: 16,
        },
      ]}>
      <Text style={[STYLES.text, STYLES.title]}>Votre position</Text>
      <Text style={[STYLES.text, {marginTop: 8}]}>
        Altitude : {currentLocation?.coords.altitude}
      </Text>
      <Text style={[STYLES.text, {marginTop: 8}]}>
        Latitude : {currentLocation?.coords.latitude}
      </Text>
      <Text style={[STYLES.text, {marginTop: 8}]}>
        Longitude : {currentLocation?.coords.longitude}
      </Text>
    </View>
  );
};

export default Location;
