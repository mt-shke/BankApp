import React from 'react';
import {View, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../../../../../globals';
import {incomesCategory} from '../../../../../schema/yup/payment';
import {TCategory} from '../../../../../ts/interfaces';

interface IPaymentItemIconProps {
  name: TCategory;
}

const PaymentItemIcon: React.FC<IPaymentItemIconProps> = ({name}) => {
  let bgColor: string = colors.lightblue;
  let iconColor: string = colors.blue;
  let iconName: string = 'menuunfold';
  const isIncome = incomesCategory.some(inc => inc === name);

  if ([...incomesCategory].includes(name) || isIncome) {
    iconName = 'bank';
  }
  if (name === 'Alimentaire') {
    bgColor = colors.lightorange;
    iconColor = colors.orange;
    iconName = 'apple1';
  }

  if (name === 'Factures') {
    bgColor = colors.lightgreen;
    iconColor = colors.green;
    iconName = 'bank';
  }
  if (name === 'Transport') {
    bgColor = colors.lightred;
    iconColor = colors.red;
    iconName = 'car';
  }
  if (name === 'Logement') {
    bgColor = colors.lightgreen;
    iconColor = colors.green;
    iconName = 'home';
  }
  if (name === 'Santé') {
    bgColor = colors.lightblue;
    iconColor = colors.blue;
    iconName = 'heart';
  }
  if (name === 'Divertissement') {
    bgColor = colors.lightorange;
    iconColor = colors.orange;
    iconName = 'gift';
  }
  if (name === 'Vacances') {
    bgColor = colors.lightgreen;
    iconColor = colors.green;
    iconName = 'earth';
  }
  if (name === 'Shopping') {
    bgColor = colors.lightblue;
    iconColor = colors.blue;
    iconName = 'shoppingcart';
  }

  const containerStyle = {...styles.containerIcon, backgroundColor: bgColor};
  const iconStyle = {...styles.icon, color: iconColor};

  return (
    <View style={styles.container}>
      <View style={containerStyle}>
        <AntDesign
          style={iconStyle}
          name={iconName}
          color={colors.white}
          size={24}
        />
      </View>
    </View>
  );
};

export default PaymentItemIcon;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerIcon: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    borderRadius: 50,
  },
  icon: {
    alignSelf: 'center',
  },
});
