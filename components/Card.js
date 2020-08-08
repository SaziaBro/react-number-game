import React from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';

const card = props => {
    return (
        <View styles={header}>
            <Text styles={title}></Text>
        </View>
    );

};
const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '60%',
        paddingTop: 36,
        backgroundColor: '#f7287b',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: 'black',
        fontSize: 18,
    }

});
export default card;