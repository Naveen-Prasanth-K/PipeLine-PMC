import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../Utilities/constants/styles';

import HomeScreen from '../components/screens/HomeScreen';
import LoginScreen from '../components/screens/LoginScreen';
import SplashScreen from '../components/screens/SplashScreen';
import DrawerNav from './DrawerNav';
const Stack = createNativeStackNavigator();


export default function NativeStackNav() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerStyle: { backgroundColor: GlobalStyles.colors.primary50 },
                headerTintColor: 'white',
            }}>
                <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})