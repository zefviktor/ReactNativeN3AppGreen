import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';
import SubscriptionBlock1 from './src/components/SubscriptionBlock1';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Подписка</Text>
        <SubscriptionBlock1/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  title: {
    // fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 28,
    lineHeight: 32,
    display: 'flex',
    alignItems: 'center',
    color: '#15284E',
  },
  price: {
    backgroundColor: '#81B578',
  },
});

export default App;
