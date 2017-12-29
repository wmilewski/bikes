import React from 'react';
import {StyleSheet, Text, ScrollView, View, TouchableOpacity, Linking} from 'react-native';
import {parseResponse} from './src/functions';
import Labels from './src/labels';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.onPressPlace = this.onPressPlace.bind(this);

        this.state = {
            places: parseResponse(require('./tests/response.json')),
        };
    }

    onPressPlace(place) {
        const label = `${Labels.bike(place.bikes)}, ${Labels.space(place.spaces)}`;
        const url = `geo:${place.lat}, ${place.lon}?q=${place.lat}, ${place.lon}(${label})`;
        Linking.canOpenURL(url).then(supported => {
            if (!supported) {
                console.log('Can\'t handle url: ' + url);
            } else {
                return Linking.openURL(url);
            }
        }).catch(err => console.error('An error occurred', err));
    }

    render() {
        const list = this.state.places.map(place => {
            const {name, bikes, spaces, distance} = place;

            return (
                <TouchableOpacity key={name} onPress={() => this.onPressPlace(place)}>
                    <View style={styles.place}>
                        <View style={styles.name}>
                            <Text>{name}</Text>
                        </View>
                        <View style={styles.details}>
                            <Text style={bikes < 3 ? {color: 'red'} : {}}>{Labels.bike(bikes)}</Text>
                            <Text style={spaces < 3 ? {color: 'red'} : {}}>{Labels.space(spaces)}</Text>
                            <Text>{distance} km</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        });

        return (
          <ScrollView>
              {list}
          </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    place: {
        backgroundColor: '#ddd',
        marginHorizontal: 10,
        marginVertical: 5,
        padding: 10,
    },
    name: {
        marginBottom: 10,
    },
    details: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
