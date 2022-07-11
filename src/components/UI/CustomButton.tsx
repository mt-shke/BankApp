import {ReactNode} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {colors} from '../../globals';
import React from 'react';

interface ICustomButtonProps {
  color?: 'orange' | 'yellow';
  children?: ReactNode | string;
  textContent?: string;
  subTextContent?: string;
}

const CustomButton: React.FC<ICustomButtonProps> = ({
  color,
  textContent,
  children,
  subTextContent,
}) => {
  const customColor = color ?? 'blue';

  if (subTextContent) {
    return (
      <View style={styles.containerSub}>
        <View
          style={{
            ...styles.containerChildren,
            backgroundColor: colors[`light${customColor}`],
          }}>
          {children}
        </View>
        <Text style={styles.text}>{subTextContent}</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: colors[`light${customColor}`],
      }}>
      {children}
      {textContent && (
        <Text
          style={{
            ...styles.text,
            color: colors[customColor === 'yellow' ? 'font' : customColor],
          }}>
          {textContent}
        </Text>
      )}
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    backgroundColor: colors.lightblue,
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderRadius: 20,
    marginBottom: 26,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    // fontSize: globalStyles.fontSizeTitle,
    // fontFamily: globalStyles.fontBangers,
    // letterSpacing: 6,
    color: colors.font,
    paddingHorizontal: 4,
    fontSize: 12,
  },
  // with subTextContent
  containerSub: {
    paddingHorizontal: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerChildren: {
    backgroundColor: colors.lightblue,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
});
