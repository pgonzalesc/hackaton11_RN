import React from 'react';
import {StyleSheet, View, Text, TouchableHighlight, ImageBackground} from 'react-native';

const image = { uri: "https://images.unsplash.com/photo-1499482125586-91609c0b5fd4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"};
const Splash = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <View style={styles.containerButton}>
                    <TouchableHighlight style={styles.button} onPress={() => navigation.navigate('Actividad1')} >
                        <Text style={styles.text}>Get Started</Text>
                    </TouchableHighlight>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    containerButton: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'flex-end',
        marginBottom: 60,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    text: {
        color: '#FFF', 
        fontWeight: 'bold', 
        fontSize: 18,
    },
    button: {
        backgroundColor: '#CA3946',
        padding: 15,
        borderRadius: 25,
    }
});

export default Splash;