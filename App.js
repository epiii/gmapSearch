import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const App = () => {
  return (
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
