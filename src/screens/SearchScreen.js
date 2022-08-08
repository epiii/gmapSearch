import { GOOGLE_MAPS_APIKEY } from '@env';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { setLocation } from '../redux/navSlice';
import cl from '../utils/debug';

const SearchScreen = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()

    return (
        <View>
            <GooglePlacesAutocomplete
                styles={{
                    container: {
                        flex: 0,
                        margin: 30,
                    },
                    textInput: {
                        paddingHorizontal: 20,
                        fontSize: 19,
                        height: 50
                    }
                }}
                nearbyPlacesAPI="GooglePlacesSearch"
                debounce={400}
                placeholder='Search Location ...'
                onPress={(data, details = null) => {
                    dispatch(
                        setLocation({
                            description: data.description,
                            coordinate: {
                                latitude: details.geometry.location.lat,
                                longitude: details.geometry.location.lng
                            },
                        })
                    )
                    navigation.navigate('MapScreen')
                    // cl('app > autocomp > data', data)
                    // cl('app > autocomp > detaila', details)
                }}
                fetchDetails={true}
                returnKeyType={"search"}
                enablePoweredByContainer={false}
                minLength={2}
                query={{
                    key: GOOGLE_MAPS_APIKEY,
                    language: 'en',
                }}
            />
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({})