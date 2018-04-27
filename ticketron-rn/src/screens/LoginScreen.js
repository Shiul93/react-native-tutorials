import React, { Component } from 'react';
import {Colors} from '../values/colors.js';
import {Fonts} from '../values/fonts.js';
import {Sizes} from '../values/sizes.js';

import { StyleSheet, Text, View, Button, Platform } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import LabelButton from '../components/LabelButton'


export default class LoginScreen extends Component {

  onPressLoginButton(){
    alert('AYYY');
  }

  onPressSignUpButton(){
    alert('LMAO');
  }
  render() {
    return (
      <View style={styles.loginScreen}>
        <Text style={styles.loginText}> USERNAME </Text>
        <View style={styles.textInputContainer}>
          <TextInput style={styles.textInput}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder=''
            onChangeText={(text) => this.setState({text})}
            textAlign={'center'}
          />
        </View>

        <Text style={styles.loginText}> PASSWORD </Text>
        <View style={styles.textInputContainer}>
          <TextInput style={styles.textInput}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder=""
            onChangeText={(text) => this.setState({text})}
            secureTextEntry = {true}
            textAlign={'center'}
          />    
        </View>

        <View style={styles.buttonContainer}>
          <Button
            color = 'skyblue'
            title='LOGIN'
            onPress={this.onPressLoginButton}
          />
        </View>
        <View style={styles.buttonContainer}>
          <LabelButton textStyle={styles.buttonColor} text={'Sign Up'} onPress={this.onPressSignUpButton}/>
        </View>
        
      </View>
    );
  }
  
}


const styles = StyleSheet.create({
    loginScreen: {
      
      flex: 3,
      backgroundColor: Colors.background,
      justifyContent: 'center',
      alignItems: 'center',
  
    },
    loginText:{
      fontFamily: Fonts.thin, 
      fontSize: 20,

    },

    textInputContainer:{
      margin:15,
      width:150,
      height:30,
      backgroundColor: Colors.textInput,
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
      color: Colors.maincolor,
      fontFamily: Fonts.thin,  
      fontSize: 15,
    }
    
  });