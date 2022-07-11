import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SelectMonth: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.selectText}>SelectMonth</Text>
    </View>
  );
};

export default SelectMonth;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    flex: 1,
  },
  selectText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
