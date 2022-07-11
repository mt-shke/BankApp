import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from '../../../globals';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ListItem from './list/ListItem';
import Gap from '../../../components/UI/Gap';

const Settings: React.FC = () => {
  return (
    <View style={styles.container}>
      <ListItem
        name="Profile"
        icon={
          <FontAwesome
            style={styles.icon}
            name={'user-circle'}
            color={colors.font}
            size={24}
          />
        }
      />
      <Gap height={1} backgroundColor={colors.font} opacity={0.4} />
      <ListItem
        name="Payment"
        icon={
          <FontAwesome
            style={styles.icon}
            name={'credit-card'}
            color={colors.font}
            size={24}
          />
        }
      />
      <Gap height={1} backgroundColor={colors.font} opacity={0.4} />

      <ListItem
        name="Customer service"
        icon={
          <MaterialIcons
            style={styles.icon}
            name={'support-agent'}
            color={colors.font}
            size={24}
          />
        }
      />
      <Gap height={1} backgroundColor={colors.font} opacity={0.4} />

      <ListItem
        name="Invite a friend"
        icon={
          <FontAwesome
            style={styles.icon}
            name={'group'}
            color={colors.font}
            size={24}
          />
        }
      />
      <Gap height={1} backgroundColor={colors.font} opacity={0.4} />

      <ListItem
        name="Settings"
        icon={
          <Ionicons
            style={styles.icon}
            name={'md-settings-sharp'}
            color={colors.font}
            size={24}
          />
        }
      />
      <Gap height={1} backgroundColor={colors.font} opacity={0.4} />

      <ListItem
        name="Messages"
        icon={
          <MaterialIcons
            style={styles.icon}
            name={'message'}
            color={colors.font}
            size={24}
          />
        }
      />
      <Gap height={1} backgroundColor={colors.font} opacity={0.4} />
      <ListItem
        name="Documents"
        icon={
          <Ionicons
            style={styles.icon}
            name={'md-document-attach-sharp'}
            color={colors.font}
            size={24}
          />
        }
      />
      <Gap height={1} backgroundColor={colors.font} opacity={0.4} />
      <ListItem
        name="General Terms and conditions of use"
        icon={
          <MaterialCommunityIcons
            style={styles.icon}
            name={'cookie-settings'}
            color={colors.font}
            size={24}
          />
        }
      />
      <Gap height={1} backgroundColor={colors.font} opacity={0.4} />
      <ListItem
        name="About us"
        icon={
          <Ionicons
            style={styles.icon}
            name={'md-logo-firefox'}
            color={colors.font}
            size={24}
          />
        }
      />
      <Gap height={1} backgroundColor={colors.font} opacity={0.4} />
      <ListItem
        name="Support our eco-project"
        icon={
          <FontAwesome
            style={styles.icon}
            name={'envira'}
            color={colors.font}
            size={24}
          />
        }
      />
      <Gap height={1} backgroundColor={colors.font} opacity={0.4} />

      <ListItem
        name="Log-out"
        icon={
          <MaterialIcons
            style={styles.icon}
            name={'logout'}
            color={colors.font}
            size={24}
          />
        }
      />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 14,
    overflow: 'hidden',
  },
  icon: {},
});
