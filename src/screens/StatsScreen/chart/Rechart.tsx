import React from 'react';
import {LineChart, Line} from 'recharts';
import {View, Text, StyleSheet} from 'react-native';

const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];

const RenderLine: React.FC = () => {
  return (
    <View style={styles.container}>
      <LineChart width={400} height={400} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChart>
    </View>
  );
};

export default RenderLine;

const styles = StyleSheet.create({
  container: {},
});
