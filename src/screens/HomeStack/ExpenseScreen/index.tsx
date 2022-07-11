import React from 'react';
import {View, StyleSheet} from 'react-native';
import Form from '../../../components/Form';
import {TExpenseScreenProps} from '../../../ts/types';

const ExpenseScreen: React.FC<TExpenseScreenProps> = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Form schema="expense" screenProps={{navigation, route}} />
    </View>
  );
};

export default ExpenseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
