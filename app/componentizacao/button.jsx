import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';


function Button({ onPress, title }) {
    return (
        <Pressable
            style={styles.button}
            onPress={onPress}
        ><Text style={styles.text}>{title}</Text></Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        width: '20%',
        paddingVertical: 10,
        borderRadius: 4,
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Arial'

    }
})

export default Button;