import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {screenWidth} from '../../../globals';
import BankCard from './BankCard';

const CustomCarousel: React.FC = () => {
  return (
    <Carousel
      width={screenWidth}
      height={260}
      data={[1, 2, 3]}
      renderItem={({item}) => <BankCard image={item} />}
      autoPlay={true}
      autoPlayInterval={3000}
    />
  );
};

export default CustomCarousel;

const styles = StyleSheet.create({
  container: {},
});
