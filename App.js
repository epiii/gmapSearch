import {
  Button,
  Text,
  Flex,
  Box,
  AppBar,
  ListItem
  // IconButton,
  // Icon
} from "@react-native-material/core";
import React from 'react';
import {
  SafeAreaView,
  StyleSheet, IconComponentProvider,
  //  Text, 
  View
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';

const App = () => {
  return (
    <SafeAreaView>
      <AppBar
        color='blue'
        title="Google Map"
      // leading={() => (
      //   <IconButton
      //     icon={() => <Ionicons name="ios-person-sharp" size={30} color="#4F8EF7" />
      //     } />
      // )}
      />
      <ListItem title="List Item" />
      <ListItem title="List Item" />

      <Flex fill>
        <Box h={12} style={{ backgroundColor: 'lightgreen' }}>
          <Text>
            halo
          </Text>

        </Box>
        <Box h={12} style={{ backgroundColor: 'lightblue' }}>
          <Text>Box 2</Text>
        </Box>
        <Flex fill style={{ backgroundColor: 'tomato' }}>
          <Text>Box 3</Text>
        </Flex>
      </Flex>

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
      </View>
      <Button title="Click Me" style={{ alignSelf: "center", marginTop: 40 }} />
      <Text>
        halooo
        halooo
        halooo
        halooo
      </Text>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});

export default App;
