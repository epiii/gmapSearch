import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = () => {
    const navigation = useNavigation()

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

            <TouchableOpacity
                onPress={() => navigation.navigate('SearchScreen')}
                style={styles.searchBox}
            >
                <Text style={styles.searchText}>Search Location ...</Text>
            </TouchableOpacity>

        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({
    wrapper: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center'
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    searchBox: {
        marginTop: 40,
        height: 50,
        width: 50,
        paddingHorizontal: 20,
        position: 'absolute',
        backgroundColor: 'white',
        width: '80%',
        alignContent: 'center',
        justifyContent: 'center',
    },
    searchText: {
        fontSize: 18
    }

})