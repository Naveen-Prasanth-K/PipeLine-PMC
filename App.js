
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import NativeStackNav from './src/navigation/NativeStackNav';

import { Amaranth_700Bold_Italic } from '@expo-google-fonts/amaranth';

export default function App() {

  const [fontsLoaded] = useFonts({
    Amaranth_700Bold_Italic
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar style="auto" />
      <NativeStackNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 0,
  },
});

