import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import BoltIcon from '../res/image/bolt.svg';

function SubscriptionBlock2() {
  return (
    <View style={styles.container}>
      <View style={styles.infoBlock}>
        <View style={styles.infoBlockOne}>
          <BoltIcon width={'100%'} heigh={'100%'} />
        </View>
        <View style={styles.infoBlockTwo}>
          <Text style={styles.title}>
            Why a paid subscription helps twice as fast to reach the goal?
          </Text>
        </View>
      </View>
      <View style={styles.taskBlock}>
        <View style={styles.taskButton}>
          <View style={styles.tackButtonItem}>
            <Text style={styles.tackButtonItemText}>To learn more</Text>
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
    backgroundColor: '#EF9611',
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
  //tackBlock
  taskBlock: {
    marginTop: 8,
  },
  taskButton: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 8,
    borderRadius: 12,
  },
  tackButtonItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    gap: 10,
  },
  tackButtonItemText: {
    fontFamily: 'Inter-SemiBold',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 18,
    display: 'flex',
    alignItems: 'center',
    color: '#FFFFFF',
  },
});

export default SubscriptionBlock2;
