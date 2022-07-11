import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import MainNavigation from './src/navigation/MainNavigation';
import UserProvider from './src/state/UserContext';

const App = () => {
  return (
    <UserProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'light-content'} />
        <MainNavigation />
      </SafeAreaView>
    </UserProvider>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default App;
