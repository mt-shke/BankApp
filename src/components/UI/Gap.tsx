import React from 'react';
import {View} from 'react-native';

interface IGapProps {
  height?: number;
  width?: number;
  backgroundColor?: string;
  opacity?: number;
}

const Gap: React.FC<IGapProps> = ({
  height,
  width,
  backgroundColor,
  opacity,
}) => {
  const style = {
    height: height ?? 0,
    width: width ?? 0,
    backgroundColor: backgroundColor ?? 'transparent',
    opacity: opacity ?? 1,
  };
  return <View style={style} />;
};

export default Gap;
