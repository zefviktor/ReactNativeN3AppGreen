import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import WatchIcon from '../res/image/watch.svg';

function SubscriptionBlock1() {
  return (
    <View style={styles.container}>
      <View style={styles.infoBlock}>
        <View style={styles.infoBlockOne}>
          <WatchIcon width={'100%'} heigh={'100%'} />
        </View>
        <View style={styles.infoBlockTwo}>
          <Text style={styles.title}>Unique low price just now</Text>
          <Text style={styles.text}>
            The offer is valid until the activation of the free period
          </Text>
        </View>
      </View>
      <View style={styles.priceBlock}>
        <View style={styles.priceButton}>
          <Text>1 месяц</Text>
          <View>
            <Text>279 ₽</Text>
            <Text>79 ₽</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#81B578',
    borderRadius: 12,
  },
  //infoBlock
  infoBlock: {
    display: 'flex',
    flexDirection: 'row',
  },
  infoBlockOne: {
    flex: 1,
  },
  infoBlockTwo: {
    flex: 2,
    alignContent: 'space-between',
  },
  title: {
    // fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 19,
    display: 'flex',
    alignItems: 'center',
    color: '#FFFFFF',
  },
  text: {
    // fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 15,
    display: 'flex',
    alignItems: 'center',
    color: '#FFFFFF',
  },
  //priceBlock
  priceBlock: {
    marginTop: 16,
  },
  priceButton: {
    marginTop: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
  },
});

export default SubscriptionBlock1;
