
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import NativeStackNav from './src/navigation/NativeStackNav';


export default function App() {
  return (
    <View style={styles.container}>
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

