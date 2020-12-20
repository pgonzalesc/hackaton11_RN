import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, Platform, PermissionsAndroid} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },
  maps: {...StyleSheet.absoluteFillObject},
});

const LocationMap = ({lat, lng}) => {
  const [location, setLocation] = useState({lat, lng});
  const mapRef = useRef(null);
  useEffect(() => {
    setLocation({'lat':lat,'lng':lng});
    mapRef.current.animateToRegion({
      latitude: lat,
      longitude: lng,
      latitudeDelta: 0.0922,
      longitudeDelta:0.0421
    })
  }, [lat,lng]);

  return (
    <>
      {location && (
        <MapView
          ref={mapRef}
          provider={PROVIDER_GOOGLE}
          style={styles.maps}
          initialRegion={{
            latitude: location.lat,
            longitude: location.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          onRegionChange={(region) => {
            setLocation({
              lat: region.latitude,
              lng: region.longitude,
            });
          }}
          onRegionChangeComplete={(region) => {
            //console.warn(location);
            setLocation({
              lat: region.latitude,
              lng: region.longitude,
            });
          }}
          >
          <Marker
            coordinate={{
              latitude: location.lat,
              longitude: location.lng,
            }}
            title="this is a marker"
            description="this is a marker description"
          />
        </MapView>
      )}
    </>
  );
};

export default LocationMap;
