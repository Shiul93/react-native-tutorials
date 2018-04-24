import React from 'react';
import {Colors} from './src/values/colors';
//import {Sizes} from './src/values/sizes';
import {Fonts} from './src/values/fonts';

import { StatusBar, StyleSheet, Text, View, Platform } from 'react-native';
import  LoginScreen  from './src/screens/LoginScreen';
import  TicketScreen  from './src/screens/TicketScreen';

export default class App extends React.Component {
  

  render() {
    
    return (
      <View style={styles.container}>

        <StatusBar hidden={true} />

        <View style={styles.header}>
            <Text style={styles.whiteTitle}>Ticketron RN</Text>
        </View>
      
        <LoginScreen/>
        
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  header: {
    height: 50,
    backgroundColor: Colors.maincolor,
    justifyContent: 'center',
  },
  whiteTitle: {
    color: Colors.background,
    marginLeft: 15,
    fontFamily: Platform.OS === 'ios' ? Fonts.iOsThin : Fonts.androidThin, 
    fontSize: 20,

  }
});
