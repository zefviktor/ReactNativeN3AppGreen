import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import WatchIcon from '../res/image/watch.svg';

function SubscriptionBlock1() {
  return (
    <View>
      <WatchIcon heigh={40} width={40}/>
      <View style={styles.price}>
        <Text style={styles.title}>Unique low price just now</Text>
        <Text style={styles.title}>The offer is valid until the activation of the free period</Text>
      </View>
    </View>
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

export default SubscriptionBlock1;
