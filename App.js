import React from 'react';
import Svg, {Circle, SvgUri, SvgXml} from 'react-native-svg';
import DoneIcon from './src/components/DoneIcon';
import Watch from './src/components/Watch';
// import SVGImg from './src/res/image/done.svg';

import {SafeAreaView, ScrollView, View, StyleSheet, Text} from 'react-native';

function App() {

  return (
    <SafeAreaView style={styles.container}>
      <DoneIcon/>
      <Watch/>
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
