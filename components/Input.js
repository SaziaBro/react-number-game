import React from 'react';
import {
    TextInput,
    View,
    StyleSheet,

} from 'react-native';

const Input = props => {
    return (
        <View>
            <TextInput
                {...props}
                style={{ ...props.style, ...styles.input }}
                color="#6E00B7"
                placeholderTextColor="#6E6CB7"
            />
        </View>
    )

}
const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10
    }

})
export default Input;