import React from 'react';
import {View, StyleSheet, Image, ImageBackground} from 'react-native';
import {colors, screenWidth} from '../../../globals';

interface IBankCardProps {
  image?: any;
}

const BankCard: React.FC<IBankCardProps> = ({image}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../../assets/img/card-2.png')}
        style={styles.card}
      />
    </View>
  );
};

export default BankCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    alignSelf: 'center',
    width: screenWidth - 40,
    padding: 10,
    borderRadius: 12,
  },
  card: {
    resizeMode: 'contain',
    width: '100%',
    height: 200,
    alignSelf: 'center',
  },
});
