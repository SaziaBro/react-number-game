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
        backgroundColor: '#f7287b',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontFamily: 'regular',
        color: 'black',
        fontSize: 20,

    }

});
export default Header;