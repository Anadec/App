import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import {vw, vh} from 'react-native-expo-viewport-units'
import {LinearGradient} from 'expo-linear-gradient'



const SplashScreen = () => {
    return (

    <LinearGradient
        colors={[ '#000000', '#DB1100']}
        style={styles.gradient}>

            <Image 
                source={{
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/2048px-Netflix_icon.svg.png',
                }}
                style={styles.image} 
            />

        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200, 
        height: 200, 
    },
    gradient: {
        flex: 1,
      position: 'absolute',
      left: '0',
      right:'0',
      top:'0',
      width: vw(100),
      height: vh(100),
      justifyContent: 'center',
      alignItems: 'center'
    }

});

export default SplashScreen;