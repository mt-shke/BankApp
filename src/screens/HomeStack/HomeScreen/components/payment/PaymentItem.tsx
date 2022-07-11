import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TCategory, IPayment} from '../../../../../ts/interfaces';
import PaymentItemData from './PaymentItemData';
import PaymentItemIcon from './PaymentItemIcon';

export interface IPaymentItemProps {
  payment: IPayment;
}

const PaymentItem: React.FC<IPaymentItemProps> = ({payment}) => {
  return (
    <View style={styles.container}>
      <PaymentItemIcon name={payment.category} />
      <PaymentItemData payment={payment} />
    </View>
  );
};

export default PaymentItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
