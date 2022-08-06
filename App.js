import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {
  Button,
  Text,
  TextInput,
  Flex,
  Box,
  AppBar,
  ListItem,
  Spacer,
  HStack
} from "@react-native-material/core";
import React from 'react';
import {
  SafeAreaView,
  StyleSheet, IconComponentProvider,
  //  Text, 
  View,
  // TextInput
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GOOGLE_MAPS_APIKEY } from '@env'

const App = () => {
  return (
    <>
      {/* 
    <SafeAreaView>
      <AppBar
        color='blue'
        title="Google Map"
      /> */}
      {/* <Box w={50} h={50} m={100} style={{ backgroundColor: "tomato" }} /> */}
      {/* <Flex fill center >
        <Box h={50} w={50} style={{ backgroundColor: 'blue' }} />
        <Box h={50} w={50} style={{ backgroundColor: 'red' }} />
        <Box h={50} w={50} style={{ backgroundColor: 'red' }} />
        <Box h={50} w={50} style={{ backgroundColor: 'red' }} />
        <Box h={50} w={50} style={{ backgroundColor: 'red' }} />
        <Box h={50} w={70} style={{ backgroundColor: 'lightgreen' }} />
        <Box h={50} w={20} style={{ backgroundColor: 'lightgreen' }} />
        <Box h={12} w={150} style={{ backgroundColor: 'lightblue' }} />
      </Flex> */}

      {/* 
      <View style={styles.wrapper}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -7.2458404,
            longitude: 112.7378177,
            latitudeDelta: 0.03,
            longitudeDelta: 0.03
          }}
        >
          <Marker
            coordinate={{
              latitude: -7.245052805728057,
              longitude: 112.73764603863215
            }}
          />
        </MapView>
      </View> */}

      <GooglePlacesAutocomplete
        styles={{
          container: {
            flex: 0,
          },
          textInput: {
            fontSize: 20
          }
        }}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
        placeholder='Search'
        // onPress={(data, details = null) => {
        //   // 'details' is provided when fetchDetails = true
        //   console.log(data, details);
        // }}
        enablePoweredByContainer={false}
        minLength={2}
        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: 'en',
        }}
      />
      {/* <TextInput
        style={{
          backgroundColor: 'white',
          margin: 30,
          paddingHorizontal: 20
        }} /> */}
    </>
  );
  // </SafeAreaView>
};


const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    backgroundColor: 'green',
  }
});

export default App;
