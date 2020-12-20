import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Dimensions, Platform, PermissionsAndroid } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Geocoder from 'react-native-geocoding';
import LocationMap from '../LocationMap';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Geolocation from 'react-native-geolocation-service';

Geocoder.init("AIzaSyBgmoTPlKbHQ9gW1zKy1zpAcVUtIrh5YSM");
const { height, width } = Dimensions.get('window');

const Autocomplete = ()=> {
    
    const [disabled, setDisabled] = useState(true);
    const [lastLocation, setLastLocation] = useState(null);
    const [initLocation, setInitLocation] = useState();
    const [location, setLocation] = useState({lat: 0, lng: 0});

    useEffect(() => {
        console.warn('useEffect');
        if (Platform.OS === 'ios') {
            Geolocation.requestAuthorization('always');
        }
        if (Platform.OS === 'android') {
            PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            );
        }
        Geolocation.getCurrentPosition(
            (position) => {
                console.warn('position', position);
                const {latitude, longitude} = position.coords;
                setInitLocation({lat: latitude, lng: longitude});
                setLocation({lat: latitude, lng: longitude});
            },
            (error) => {
            console.warn(error.code, error.message);
            },
            {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
    }, []);

    const getLastLocation = () => {
        setLocation({lat:lastLocation.lat, lng:lastLocation.lng});
    }

    const getInitialLocation = () => {
        setLocation({lat:initLocation.lat, lng: initLocation.lng});
    }

    return(
        <>
            <GooglePlacesAutocomplete
                placeholder='Search'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log('Hola');
                    Geocoder.from(details.description)
                    .then(json => {
                        var location = json.results[0].geometry.location;
                        console.log('location',location);
                        setLastLocation(location);
                        setDisabled(false);
                        setLocation({lat:location.lat, lng:location.lng});
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
            <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
                <TouchableHighlight 
                 style={styles.button} 
                 onPress={()=>getInitialLocation()}
                >
                    <Text style={styles.textButton}>Ubicación Actual</Text>
                </TouchableHighlight>
                { disabled 
                  ? <TouchableHighlight 
                     style={styles.buttonDisabled} disabled={true}>
                        <Text style={styles.textDisabled}>Última Ubicación</Text>
                    </TouchableHighlight>
                  : <TouchableHighlight 
                     style={styles.button}
                     onPress={()=>getLastLocation()}
                    >
                        <Text style={styles.textButton}>Última Ubicación</Text>
                    </TouchableHighlight>
                }
            </View>
            <View style={styles.container}>
                <LocationMap 
                lat={location.lat}
                lng={location.lng}/>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '70%',
    },
    button: {
        width:width/2,
        padding: 10,
        backgroundColor: '#5F9DF5',
        borderWidth: 0.7,
        borderColor: '#e2e2e2',
    },
    buttonDisabled: {
        width:width/2,
        padding: 10,
        backgroundColor: '#EBEBEB',
    },
    textButton: {
        textAlign:'center',
        color:'#FFF',
        fontWeight:'bold',
        fontSize:18,
    },
    textDisabled: {
        textAlign:'center',
        color:'#B8B8B8',
        fontWeight:'bold',
        fontSize:18,
    }
});

export default Autocomplete;