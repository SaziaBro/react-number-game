import React from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';

const mainScreen = props => {
    return (
        <View>
            <Text>Hi</Text>
        </View>
    );

}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
})
export default mainScreen;