import React from 'react';
import { Image, StyleSheet, Text, useWindowDimensions, View } from 'react-native';

export default function SplashScreen({ navigation }) {

    setTimeout(() => {
        navigation.replace('LoginScreen');
    }, 3000)

    return (
        <View>
            <Image source={require('../../images/SplashScreen.png')} style={{ width: '100%', height: '100%' }} />
            <Text>SplashScreen</Text>
        </View>
    )
}
