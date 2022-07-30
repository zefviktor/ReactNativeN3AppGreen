import React from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  Text,
  // View,
} from 'react-native';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Подписка</Text>
        <View style={styles.price}>
          <Text style={styles.title}>Уникально низкая цена только сейчас</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16
  },
  title: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 28,
    lineHeight: 32,
    display: 'flex',
    alignItems: 'center',
    color: '#15284E'
  },
  price: {
    backgroundColor: '#81B578',
    
  }
});

export default App;
