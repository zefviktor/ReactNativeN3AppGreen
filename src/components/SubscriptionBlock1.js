/* eslint-disable react-native/no-inline-styles */
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
          <View style={styles.priceButtonItem}>
            <Text style={styles.priceButtonItemMonthText}>1 month</Text>
          </View>
          <View style={styles.priceButtonItem}>
            <Text style={{display: 'none'}}>Популярно</Text>
          </View>
          <View style={styles.priceButtonItem}>
            <Text style={styles.priceButtonItemOldText}>279 $</Text>
            <Text style={styles.priceButtonItemNewText}>79 $</Text>
          </View>
        </View>
      </View>
      <View style={styles.priceBlock}>
        <View style={styles.priceButton}>
          <View style={styles.priceButtonItem}>
            <Text style={styles.priceButtonItemMonthText}>3 month</Text>
          </View>
          <View style={styles.priceButtonItem}>
            <Text style={{display: 'none'}}>Популярно</Text>
          </View>
          <View style={styles.priceButtonItem}>
            <Text style={styles.priceButtonItemOldText}>749 $</Text>
            <Text style={styles.priceButtonItemNewText}>249 $</Text>
          </View>
        </View>
      </View>
      <View style={styles.priceBlock}>
        <View style={styles.priceButton}>
          <View style={styles.priceButtonItem}>
            <Text style={styles.priceButtonItemMonthText}>6 month</Text>
          </View>
          <View style={styles.priceButtonItem}>
            <Text style={{display: 'none'}}>Популярно</Text>
          </View>
          <View style={styles.priceButtonItem}>
            <Text style={styles.priceButtonItemOldText}>490 $</Text>
            <Text style={styles.priceButtonItemNewText}>1290 $</Text>
          </View>
        </View>
      </View>
      <View style={styles.priceBlock}>
        <View style={styles.priceButton}>
          <View style={styles.priceButtonItem}>
            <Text style={styles.priceButtonItemMonthText}>1 year</Text>
          </View>
          <View style={styles.priceButtonItem}>
            <Text style={{display: 'flex'}}> Popularly</Text>
          </View>
          <View style={styles.priceButtonItem}>
            <Text style={styles.priceButtonItemOldText}>1145 $</Text>
            <Text style={styles.priceButtonItemNewText}>2290 $</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    marginHorizontal: 16,
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
    fontFamily: 'Inter-Bold',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 19,
    display: 'flex',
    alignItems: 'center',
    color: '#FFFFFF',
  },
  text: {
    fontFamily: 'Inter-Medium',
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 15,
    display: 'flex',
    alignItems: 'center',
    color: '#FFFFFF',
  },
  //priceBlock
  priceBlock: {
    // marginTop: 8,
  },
  priceButton: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 8,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
  },
  priceButtonItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceButtonItemMonthText: {
    fontFamily: 'Inter-Bold',
    fontStyle: 'normal',
    fontSize: 18,
    lineHeight: 22,
    display: 'flex',
    alignItems: 'center',
    color: '#15284E',
  },
  priceButtonItemOldText: {
    fontFamily: 'Inter-SemiBold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 18,
    display: 'flex',
    alignItems: 'center',
    color: '#919AAF',
  },
  priceButtonItemNewText: {
    fontFamily: 'Inter-SemiBold',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 18,
    display: 'flex',
    alignItems: 'center',
    color: '#15284E',
  },
});

export default SubscriptionBlock1;
