import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ContributionGraph} from 'react-native-chart-kit';
import {chartConfig, screenWidth} from '../../../globals';

const Contribution: React.FC = () => {
  const commitsData = [
    {date: '2017-01-02', count: 1},
    {date: '2017-01-03', count: 2},
    {date: '2017-01-04', count: 3},
    {date: '2017-01-05', count: 4},
    {date: '2017-01-06', count: 5},
    {date: '2017-01-30', count: 2},
    {date: '2017-01-31', count: 3},
    {date: '2017-03-01', count: 2},
    {date: '2017-04-02', count: 4},
    {date: '2017-03-05', count: 2},
    {date: '2017-02-30', count: 4},
  ];

  return (
    <View style={styles.container}>
      {/* <ContributionGraph
        values={commitsData}
        endDate={new Date('2017-04-01')}
        numDays={105}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
      /> */}
    </View>
  );
};

export default Contribution;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
