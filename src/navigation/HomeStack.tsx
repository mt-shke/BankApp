import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/HomeStack/HomeScreen';
import IncomeScreen from '../screens/HomeStack/IncomeScreen';
import ExpenseScreen from '../screens/HomeStack/ExpenseScreen';
import {screenOptions} from '../globals';

export type THomeStackScreenParamList = {
  HomeScreen: undefined;
  IncomeScreen: undefined;
  ExpenseScreen: undefined;
};

export type THomeStackProps = NativeStackScreenProps<THomeStackScreenParamList>;

const Stack = createNativeStackNavigator<THomeStackScreenParamList>();

const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={screenOptions}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="IncomeScreen" component={IncomeScreen} />
      <Stack.Screen name="ExpenseScreen" component={ExpenseScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
