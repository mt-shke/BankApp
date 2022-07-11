import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../../../globals';

const Transactions: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transactions</Text>
      <Text style={styles.seeAll}>Voir tout</Text>
    </View>
  );
};

export default Transactions;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 12,
    alignItems: 'baseline',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: colors.font,
  },
  seeAll: {
    fontSize: 14,
    color: colors.blue,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
});
