import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';
import SubscriptionBlock1 from './src/components/SubscriptionBlock1';
import SubscriptionBlock2 from './src/components/SubscriptionBlock2';
import SubscriptionBlock3 from './src/components/SubscriptionBlock3';
import SubscriptionBlock4 from './src/components/SubscriptionBlock4';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Subscription</Text>
        <SubscriptionBlock1 />
        <SubscriptionBlock2 />
        <SubscriptionBlock3 />
        <SubscriptionBlock4 />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9F9FE',
  },
  title: {
    marginVertical: 8,
    marginHorizontal: 16,
    // fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 28,
    lineHeight: 32,
    display: 'flex',
    alignItems: 'center',
    color: '#15284E',
  },
});

export default App;
