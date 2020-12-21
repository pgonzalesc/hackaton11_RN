import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Gallery from '../../src/components/Gallery';
import {galleryData} from '../../resource/functions/data/galleryData';

const Actividad2 = () => {
    return (
      <Gallery 
      data = {galleryData}/>
    );
}

const styles = StyleSheet.create({

});

export default Actividad2;
