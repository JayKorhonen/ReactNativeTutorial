import React, {useContext} from 'react';
import { Text, StyleSheet, ActivityIndicator } from 'react-native';
import MapView, {Polyline, Circle} from 'react-native-maps';
import {Context as LocationContext} from '../context/LocationContext';

const Map = () => {
    const {state: {currentLocation}} = useContext(LocationContext);
    if (!currentLocation) {
        return <ActivityIndicator size="large" sytle={{marginTop: 200}} />
    }

    return (
        <MapView
            style={styles.map}
            initialRegion={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
        >
        <Circle
            center={currentLocation.coords}
            radius={40}
            strokeColor="rgba(159, 158, 225, 1.0)"
            fillColor="rgba(159, 158, 225, .3)"
        />
            {/* <Polyline coordinates={points}/> */}
        </MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        height: 300,
    }
});

export default Map;