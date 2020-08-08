import React from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';

const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );

};
const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: '#6E00B7',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontFamily: 'regular',
        color: 'white',
        fontSize: 25,

    }

});
export default Header;