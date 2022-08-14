import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';
import SubscriptionBlock1 from './src/components/SubscriptionBlock1';
import SubscriptionBlock2 from './src/components/SubscriptionBlock2';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Subscription</Text>
        <SubscriptionBlock1 />
        <SubscriptionBlock2/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  title: {
    marginBottom: 8,
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
