import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Header from './components/Header';
import MainScreen from './screens/mainScreen';

const fetchFonts = () => {
  return Font.loadAsync({
    'black': require('./assets/fonts/Raleway-Black.ttf'),
    'bold': require('./assets/fonts/Raleway-Bold.ttf'),
    'regular': require('./assets/fonts/Raleway-Regular.ttf')
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        <Header title="Guess the Number" />
        <MainScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
