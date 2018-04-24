import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import LabelButton from '../components/LabelButton'

export default class TicketScreen extends Component {

  onPressLoginButton(){
    alert('AYYY');
  }

  onPressSignUpButton(){
    alert('LMAO');
  }
  render() {
    return (
      <View style={styles.ticketScreen}>
        
        
      </View>
    );
  }
  
}


const styles = StyleSheet.create({
    ticketScreen: {
      
      flex: 3,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
  
    },
    loginText:{
      fontFamily: 'sans-serif-thin', 
      fontSize: 20,

    },

    textInputContainer:{
      margin:15,
      width:150,
      backgroundColor: 'whitesmoke',
      borderRadius: 15,
      justifyContent: 'center',
    },
    textInput:{
      marginLeft: 15,
      marginRight: 15,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonContainer: {
      margin: 10,
      width: 100,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonColor:{
      color: 'skyblue',
      fontFamily: 'sans-serif-light', 
      fontSize: 15,


    }
    
  });