import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TRootStackParamsList} from '../../navigation/RootStack';
import {THomeStackScreenParamList} from '../../navigation/HomeStack';

export type THomeStackProps = NativeStackScreenProps<
  TRootStackParamsList,
  'HomeStack'
>;
export type AccountScreenProps = NativeStackScreenProps<
  TRootStackParamsList,
  'AccountScreen'
>;
export type TStatsScreenProps = NativeStackScreenProps<
  TRootStackParamsList,
  'StatsScreen'
>;

export type THomeScreenProps = NativeStackScreenProps<
  THomeStackScreenParamList,
  'HomeScreen'
>;

export type TExpenseScreenProps = NativeStackScreenProps<
  THomeStackScreenParamList,
  'ExpenseScreen'
>;

export type TIncomeScreenProps = NativeStackScreenProps<
  THomeStackScreenParamList,
  'IncomeScreen'
>;
