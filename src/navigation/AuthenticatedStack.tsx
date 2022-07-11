import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import {screenOptions} from '../globals';
import HomeStack from './HomeStack';

export type TAuthenticatedStackParamsList = {
  HomeStack: undefined;
};

const Stack = createNativeStackNavigator<TAuthenticatedStackParamsList>();

const AuthenticatedStack: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeStack"
        defaultScreenOptions={screenOptions}>
        <Stack.Screen
          name="HomeStack"
          component={HomeStack}
          options={screenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthenticatedStack;

const styles = StyleSheet.create({
  container: {},
});
