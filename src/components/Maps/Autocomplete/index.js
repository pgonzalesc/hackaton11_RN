import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Geocoder from 'react-native-geocoding';

Geocoder.init("AIzaSyBgmoTPlKbHQ9gW1zKy1zpAcVUtIrh5YSM");

const Autocomplete = ()=> {
    return(
        <GooglePlacesAutocomplete
            placeholder='Search'
            onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                //console.log(data, details);
                console.log(details.description);
                Geocoder.from(details.description)
                .then(json => {
                var location = json.results[0].geometry.location;
                console.log(location);
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
    );
}

const styles = StyleSheet.create({

});

export default Autocomplete;