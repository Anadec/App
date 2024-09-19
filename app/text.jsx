import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

function Input({ value, onChangeNumber }) {
    return (
        <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeNumber}
            placeholder='0,00'
            keyboardType='numeric'
        />
    );
}

const styles = StyleSheet.create({
    input: {
        borderBottomColor: '#EBEBEB',
        borderBottomWidth: 1,
        width: '40%',
        backgroundColor: '#EBEBEB',
        fontSize: 20,
        padding: 6,
        marginBottom: 13,
        borderRadius: '4'
    }
})
export default Input;