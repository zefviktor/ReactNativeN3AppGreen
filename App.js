import React from 'react';
import Svg, {Circle, SvgUri} from 'react-native-svg';

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
      <Svg height="50%" width="50%" viewBox="0 0 100 100" >
        <Circle cx="50" cy="50" r="50" stroke="purple" strokeWidth=".5" fill="violet" />
      </Svg>
      <SvgUri
        width={100}
        height={100}
        uri="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/debian.svg"
      />

      {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM6.02294 12.836L10.0181 17.155C10.4309 17.6012 11.1431 17.579 11.5272 17.1079L18.1098 9.03506C18.4733 8.58926 18.4404 7.94067 18.0336 7.53393C17.5993 7.09962 16.8964 7.09566 16.4572 7.52505L10.792 13.064C10.6219 13.2304 10.3581 13.2538 10.1613 13.12L7.39678 11.2401C7.0122 10.9785 6.50204 10.9983 6.13887 11.2889C5.65849 11.6732 5.6052 12.3844 6.02294 12.836Z" fill="#81B578"/>
      </svg> */}

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
    // fontFamily: 'Inter',
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
