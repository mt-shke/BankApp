import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {colors} from '../../../../globals';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {IUser} from '../../../../ts/interfaces/user';
import {convertAmount} from '../../../../utils';

const LandingView: React.FC<IUser> = ({user}) => {
  const {incomes, expenses} = user;

  const convertedIncomes = incomes.map(inc => inc.amount);
  const convertedExpenses = expenses.map(inc => inc.amount);
  const totalIncomes = convertedIncomes.reduce((acc, curr) => acc + curr);
  const totalExpenses = convertedExpenses.reduce((acc, curr) => acc + curr);
  const balance = (totalIncomes - totalExpenses).toFixed(2);

  return (
    <>
      <View style={styles.topContainer}>
        <View style={styles.containerHeader}>
          <Text>Solde disponible</Text>
          <Text style={styles.price}>{balance}€</Text>
        </View>
        <Image
          style={styles.flag}
          source={require('../../../../../assets/img/usa_flag.png')}
        />
      </View>
      <View style={styles.containerBottom}>
        <View style={styles.containerBottomText}>
          <Text>Voir plus</Text>
          <View style={styles.containerArrow}>
            <MaterialIcons
              name={'keyboard-arrow-right'}
              color={colors.blue}
              size={20}
            />
          </View>
        </View>
        <View style={styles.containerBottomText}>
          <Text>US Dollar</Text>
          <View style={styles.containerArrow}>
            <MaterialIcons
              name={'keyboard-arrow-down'}
              color={colors.blue}
              size={20}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default LandingView;

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerHeader: {},
  containerBottom: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerBottomText: {
    flexDirection: 'row',
  },
  containerArrow: {
    backgroundColor: colors.lightblue,
    borderRadius: 50,
    marginHorizontal: 6,
  },
  price: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  flag: {
    width: 48,
    height: 48,
    padding: 20,
  },
});
