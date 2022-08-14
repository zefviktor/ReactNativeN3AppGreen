import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

function SubscriptionBlock4() {
  return (
    <View style={[styles.container, styles.shadowProp]}>
      <View style={styles.infoBlock}>
        <Text style={styles.title}>Free for 15 days</Text>
      </View>
      <View style={styles.taskBlock}>
        <View style={styles.taskButton}>
          <View style={styles.tackButtonItem}>
            <Text style={styles.tackButtonItemText}>Taste</Text>
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
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
  },
  shadowProp: {
    shadowOffset: {width: 0, height: 1},
    shadowColor: '#15284e',
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  //infoBlock
  infoBlock: {
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    // fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 22,
    color: '#15284E',
  },
  //tackBlock
  taskBlock: {
    marginTop: 8,
  },
  taskButton: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 16,
    borderRadius: 12,
  },
  tackButtonItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2559D6',
    borderRadius: 8,
    padding: 16,
    gap: 10,
  },
  tackButtonItemText: {
    // fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 18,
    display: 'flex',
    alignItems: 'center',
    color: '#FFFFFF',
  },
});

export default SubscriptionBlock4;
