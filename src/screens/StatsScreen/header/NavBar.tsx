import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import CustomButton from '../../../components/UI/CustomButton';
import SelectMonth from './SelectMonth';
import Gap from '../../../components/UI/Gap';

const NavBar: React.FC = () => {
  return (
    <View style={styles.container}>
      <SelectMonth />
      <View style={styles.containerButtons}>
        <View>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <CustomButton color="yellow" textContent="24H" />
          </TouchableOpacity>
        </View>
        <Gap width={14} />
        <View>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <CustomButton color="yellow" textContent="1W" />
          </TouchableOpacity>
        </View>
        <Gap width={14} />
        <View>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <CustomButton color="yellow" textContent="1M" />
          </TouchableOpacity>
        </View>
        <Gap width={14} />
        <View>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <CustomButton color="yellow" textContent="1Y" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 4,
    // backgroundColor: 'red',
  },
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
  },
  button: {
    // backgroundColor: 'blue',
    justifyContent: 'center',
  },
});
