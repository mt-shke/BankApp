import React, {ReactNode} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../../../globals';

interface IListItemProps {
  name: string;
  icon: ReactNode;
}

const ListItem: React.FC<IListItemProps> = ({name, icon}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerIcon}>{icon}</View>
      <View style={styles.containerText}>
        <Text style={styles.text}>{name}</Text>
      </View>
      <View style={styles.containerArrow}>
        <MaterialIcons
          style={styles.icon}
          name={'keyboard-arrow-right'}
          color={colors.font}
          size={24}
        />
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  containerIcon: {
    paddingHorizontal: 12,
  },
  containerText: {
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  containerArrow: {
    position: 'absolute',
    right: 0,
    paddingHorizontal: 10,
  },
  icon: {},
});
