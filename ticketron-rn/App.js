import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import  LoginScreen  from './src/screens/LoginScreen'

export default class App extends React.Component {


  render() {
    return (
      <View style={styles.container}>

        <StatusBar hidden={true} />

        <View style={styles.header}>
            <Text style={styles.whiteTitle}>Ticketron RN</Text>
        </View>
      
        <LoginScreen>
        </LoginScreen>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 50,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
  },
  whiteTitle: {
    color: 'white',
    marginLeft: 15,
    fontFamily: 'sans-serif-thin', 
    fontSize: 20,

  }
});
