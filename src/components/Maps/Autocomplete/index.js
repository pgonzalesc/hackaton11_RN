import React, {useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Geocoder from 'react-native-geocoding';
import LocationMap from '../LocationMap';

Geocoder.init("AIzaSyBgmoTPlKbHQ9gW1zKy1zpAcVUtIrh5YSM");

const Autocomplete = ()=> {
    const [latitud, setLatitud] = useState(-12.0463731);
    const [longitud, setLongitud] = useState(-77.042754);
    return(
        <>
        <GooglePlacesAutocomplete
            placeholder='Search'
            onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                //console.log(data, details);
                //console.log(details.description);
                Geocoder.from(details.description)
                .then(json => {
                    var location = json.results[0].geometry.location;
                    //console.log(location);
                    console.log(location.lat);
                    console.log(location.lng);
                    setLatitud(location.lat);
                    setLongitud(location.lng);
                })
                .catch(error => console.warn(error));
            
            }}
            query={{
                key: 'AIzaSyBgmoTPlKbHQ9gW1zKy1zpAcVUtIrh5YSM',
                language: 'en',
            }}
            requestUrl={{
                useOnPlatform: 'web', // or "all"
                url:
                'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api', // or any proxy server that hits https://maps.googleapis.com/maps/api
            }}
        />
        {latitud &&
            <View style={styles.container}>
                <LocationMap 
                lat={latitud}
                lng={longitud}/>
            </View>
        }
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        height:'80%',
    },
  });

export default Autocomplete;