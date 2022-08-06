import { GOOGLE_MAPS_APIKEY } from '@env';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import cl from '../utils/debug';

const SearchScreen = () => {
    return (
        <View>
            <Text>SearchScreen</Text>
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
                onPress={(data, details = null) => {
                    cl('app > autocomp > data', data)
                    cl('app > autocomp > details', details)
                }}
                fetchDetails={true}
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