import React from 'react';
import {View, StyleSheet} from 'react-native';
import Form from '../../../components/Form';
import {TIncomeScreenProps} from '../../../ts/types';

const IncomeScreen: React.FC<TIncomeScreenProps> = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Form schema="income" screenProps={{navigation, route}} />
    </View>
  );
};

export default IncomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
